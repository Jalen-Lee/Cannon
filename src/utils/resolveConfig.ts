import path from 'node:path'
import {DEFAULT_CONFIG_FILES} from "../constants";
import fs from 'node:fs'
import process from "node:process";
import {build} from "esbuild";
import { pathToFileURL } from 'node:url'
import {createRequire} from 'node:module'
import {isObject, normalizePath} from ".";
import os from "node:os";

interface NodeModuleWithCompile extends NodeModule {
    _compile(code: string, filename: string): any
}

export interface EntryPoint {
    /**
     * locale目录名
     */
    name: string,
    /**
     * locale入口
     */
    input: string,
    /**
     * locale输出目录
     */
    output: string,
    /**
     * 主语言
     */
    mainLocale: string,
    /**
     * 语言列表
     */
    targetLocales: string[]
}

export type UserConfigFn = () => UserConfig | Promise<UserConfig>
export type UserConfigExport = UserConfig | Promise<UserConfig> | UserConfigFn
export interface UserConfig {
    /**
     * 项目的根目录
     */
    root?:string,
    /**
     * 临时文件夹的根目录
     */
    tmpDirRoot?: string,
    /**
     * 要翻译的locale目录，可以是一个配置对象或配置对象列表
     */
    entryPoints?: EntryPoint | EntryPoint[],
    plugins?: any[]
}

export function defineConfig(config: UserConfigExport): UserConfigExport {
    return config
}

const dynamicImport = new Function('file', 'return import(file)')
const _require = createRequire(import.meta.url)

/**
 * @description 将配置文件转译为指定可执行格式
 * @param filename
 * @param isESM
 */
async function bundleConfigFile(filename:string,isESM:boolean){
    const result = await build({
        absWorkingDir: process.cwd(),
        entryPoints: [filename],
        outfile: 'out.js',
        write: false,
        target: ['node14.18', 'node16'],
        platform: 'node',
        sourcemap: 'inline',
        metafile: true,
        format: isESM ? 'esm' : 'cjs',
        mainFields: ['main'],
    })
    const { text } = result.outputFiles[0]
    return { code: text}
}

async function loadConfigFromBundledFile(
    filename:string,
    bundledCode: string,
    isESM:boolean
): Promise<UserConfigExport>{
    if(isESM){
        const fileBase = `${filename}.timestamp-${Date.now()}`
        const fileNameTmp = `${fileBase}.mjs`
        const fileUrl = `${pathToFileURL(fileBase)}.mjs`
        fs.writeFileSync(fileNameTmp, bundledCode)
        try {
            return (await dynamicImport(fileUrl)).default
        } finally {
            try {
                fs.unlinkSync(fileNameTmp)
            } catch {
                // already removed if this function is called twice simultaneously
            }
        }
    }  // for cjs, we can register a custom loader via `_require.extensions`
    else {
        const extension = path.extname(filename)
        const realFileName = fs.realpathSync(filename)
        const loaderExt = extension in _require.extensions ? extension : '.js'
        const defaultLoader = _require.extensions[loaderExt]!
        _require.extensions[loaderExt] = (module: NodeModule, filename: string) => {
            if (filename === realFileName) {
                ;(module as NodeModuleWithCompile)._compile(bundledCode, filename)
            } else {
                defaultLoader(module, filename)
            }
        }
        // clear cache in case of server restart
        delete _require.cache[_require.resolve(filename)]
        const raw = _require(filename)
        _require.extensions[loaderExt] = defaultLoader
        return raw.__esModule ? raw.default : raw
    }
}

export async function loadConfigFromFile (
    configFile?: string,
    configRoot: string = process.cwd(),
){
    let resolvedPath: string | undefined
    if (configFile) {
        // 显式配置路径总是从CWD解析
        resolvedPath = path.resolve(configFile)
    } else {
        // 如果configRoot存在的，隐式配置文件从configRoot开始解析，否则从cwd
        for (const filename of DEFAULT_CONFIG_FILES) {
            const filePath = path.resolve(configRoot, filename)
            if (!fs.existsSync(filePath)) continue
            resolvedPath = filePath
            break
        }
    }
    if (!resolvedPath) {
        console.error('no config file found.')
        return null
    }

    let isESM = false
    if (/\.m[jt]s$/.test(resolvedPath)) {
        isESM = true
    } else if (/\.c[jt]s$/.test(resolvedPath)) {
        isESM = false
    } else {
        // 检查pkg文件以确定配置文件类型
        try {
            const pkg = path.resolve(process.cwd(), './package.json')
            isESM = !!pkg && JSON.parse(pkg).type === 'module'
        } catch (e) {}
    }

    try {
        const bundled = await bundleConfigFile(resolvedPath, isESM)
        const userConfig = await loadConfigFromBundledFile(
            resolvedPath,
            bundled.code,
            isESM
        )
        if (!isObject(userConfig)) {
            throw new Error(`config must export or return an object.`)
        }

        return {
            path: normalizePath(resolvedPath),
            config: typeof userConfig === 'function'? await userConfig() : userConfig,
        }
    }catch (e) {

    }
}

export interface ResolveConfigOptions {
    // 配置文件路径 或 关闭配置文件
    configFile?: string | false
}

/**
 * @description 解析配置文件内容
 * @param options
 */
export async function resolveConfig(options:ResolveConfigOptions):Promise<UserConfig>{
    const {configFile} = options
    let config = {}
    if (configFile !== false) {
        const loadResult = await loadConfigFromFile(
            configFile
        )
        if (loadResult) {
            config = await loadResult.config
        }
    }
    return config
}
