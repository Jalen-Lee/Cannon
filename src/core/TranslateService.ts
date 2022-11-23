import path from 'node:path'
import fs from 'node:fs'
import {EntryPoint, removeDir} from "../utils";
import * as process from "process";

import parse,{ParseOutput} from "./parse";


export interface TranslateServiceProps {
    tmpDirRoot: string,
    entryPoint: EntryPoint
}

export interface Plugin{

}


// 合并构建选项
function mergeProps(userOptions,defaultOptions){
    return userOptions
}

class  TranslateService{
    private readonly props: TranslateServiceProps
    private readonly plugins: Plugin[] = []
    private tmpDir:string

    constructor(props:TranslateServiceProps) {
        this.props = mergeProps(props,{})
        this.init()
    }

    /**
     * 初始化，创建缓存目录，
     * @private
     */
    private async init(){
        const {tmpDirRoot} = this.props
        this.tmpDir = path.resolve(tmpDirRoot,'.cannon')
        if(fs.existsSync(this.tmpDir)){
            await removeDir(this.tmpDir)
        }
        fs.mkdirSync(this.tmpDir,{recursive:true})
    }
    // 插件以cannon-plugin开头
    // 插件注册
    use(){

    }

    run(){
        const {entryPoint} = this.props
        const parseOutput = parse({
            entryName: entryPoint.name,
            entryPath: entryPoint.input,
            tempDirPath: this.tmpDir,
            mainLocale: entryPoint.mainLocale,
            targetLocales: entryPoint.targetLocales
        })
        console.log('parseOutput',parseOutput)
    }

    shrink(){

    }
}

export default TranslateService
