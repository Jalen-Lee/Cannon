import fse, {WriteFileOptions} from "fs-extra";
import {resolve} from "path";

/**
 * @description 同步读取文件
 * @param p
 */
export function readFile(p: string) {
    try {
        return fse.readFileSync(p, 'utf-8')
    } catch (err) {
        console.log('[Error]:readFile', err)
    }
}

/**
 * @description 同步写入文件到系统
 * @param p
 * @param data
 * @param options
 */
export function writeFile(p: string, data: string | NodeJS.ArrayBufferView){
    try {
        fse.writeFileSync(p,data,{
            flag:'w+',
            encoding:'utf-8',
        })
    }catch (err){
        console.log('[Error]:writeFile',err)
    }
}

/**
 * @description 读取单层目录下的所有文件
 * @param p
 */
export function readDir(p: string) {
    try {
        const dir = fse.readdirSync(p, {
            encoding: 'utf-8',
            withFileTypes: true
        })

        return dir.map(i => {
            return {
                name: i.name,
                fullPath: resolve(p, i.name),
                dirent: i,
                isFile: i.isFile(),
                isDir: i.isDirectory()
            }
        })
    } catch (e) {
        console.log('[Error]:readDir', e)
    }
}

/**
 * @description 加载cjs模块文件
 * @param p
 */
export function loadCjsFile(p:string){
    const module = require(p)
    return module.default
}

