import Dependence from "./dependence";
import Bundle from "./bundle";
import * as path from "path";
import fse from "fs-extra";
import {readDir} from "../utils";

export interface ModuleOptions {
    // 模块名
    name: string,
    resolvePtah: string,
    // 在哪个根Locale目录下
    ownerTmpLocaleDir: string,
    // 属于哪个bundle
    ownerBundle: Bundle
}

export default class Module {
    name: string = ''
    // 在tmpDir中的路径
    inTmpDirLocalePath: string = ''
    inLocalePath: string = ''
    private readonly options:ModuleOptions
    private dependencies?: Dependence[]

    constructor(options:ModuleOptions) {
        this.options = options
        this.name = this.options.name
        this.inLocalePath = this.options.resolvePtah
        this.inTmpDirLocalePath = path.resolve(this.options.ownerTmpLocaleDir,this.options.name)

        this.init()
        this.buildDeps()
    }

    init(){
        if(!fse.existsSync(this.inTmpDirLocalePath)){
            fse.mkdirSync(this.inTmpDirLocalePath)
        }
    }

    buildDeps(){
        const depBlocks = readDir(this.inLocalePath)
        this.dependencies = depBlocks?.filter(i=>{
            const extname = path.extname(i.fullPath)
            return i.isFile && ['.js'].includes(extname)
        }).map(i=>{
            return new Dependence({
                name: path.basename(i.fullPath,'.js'),
                inTmpLocalePath: path.resolve(this.inTmpDirLocalePath,i.name),
                inLocalePath: i.fullPath
            })
        })

        // console.log('depBlocks',depBlocks)
    }
}
