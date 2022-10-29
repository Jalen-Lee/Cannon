import fse from 'fs-extra'
import esbuild from 'esbuild'
import {resolve} from "path";
import * as process from "process";
import {processRawLocaleObjToPendingLocaleObj} from "./utils/process";
import {LOCALES_CODE} from "./constant";


export function readFile(path:string){
    try {
        const content = fse.readFileSync(path,'utf-8')
        return content
    }catch (err){
        console.log('[Error]:readFile',err)
    }
}

export function writeFile(path: string, content: string){
    try {
        fse.writeFileSync(path,content,{
            flag:'w+'
        })
    }catch (err){
        console.log('[Error]:writeFile',err)
    }
}




/**
 * @description 将esm代码转换为cjs代码
 * @param input
 */
export function transformEsmToCjs(input: string){
    return esbuild.transformSync(input,{
        format:'cjs'
    })
}

/**
 * @description 加载已经编译成cjs的语言文件
 * @param path
 */
export function loadLocalesFile(path:string){
    const module = require(path)
    return module.default
}

export function readDir(path:string){
    const dir = fse.readdirSync(path,{
        encoding:'utf-8',
        withFileTypes:true
    })

    return dir.map(i=>{
        return {
            fullPath: resolve(path,i.name),
            dirent: i
        }
    })
}

export async function generateCacheDir(pathStr:string,name:string){
    const targetDirPath = resolve(process.cwd(),'.cTrans')
    await fse.mkdir(targetDirPath)
    const dirData = readDir(pathStr)
    for(const i of dirData){
        const {fullPath} = i
        const fileContent = readFile(fullPath) || ''
        const transformData = transformEsmToCjs(fileContent)
        const outputPath = resolve(targetDirPath,name,i.dirent.name)
        await fse.mkdir(resolve(targetDirPath,name))
        writeFile(outputPath,transformData.code)
    }
}


export function generateTemplateLocaleMap(){
    const templateLocaleMap = new Map()
    const targetDirPath = resolve(process.cwd(),'.cTrans')
    const dirData = readDir(targetDirPath)
    for(const i of dirData){
        const {fullPath,dirent} = i
        const localeData = loadLocalesFile(fullPath)
        const pendingLocaleData = processRawLocaleObjToPendingLocaleObj(localeData)
        templateLocaleMap.set(i.dirent.name,pendingLocaleData)
    }
    return templateLocaleMap
}


export function generateCacheLocaleData(localeDir:string){
    const dirs = readDir(localeDir)
    const targetLocaleList = dirs.filter(i=>LOCALES_CODE.includes(i.dirent.name))
    targetLocaleList.forEach(i=>{
        const {fullPath,dirent:{name}} = i

        console.log(i.fullPath)
        generateCacheDir(i.fullPath,i.dirent.name)
    })
    // console.log('dirs',dirs)
}



