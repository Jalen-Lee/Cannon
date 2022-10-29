import Graph from "./graph";
import {readFile, transformEsmToCjs, writeFile} from "../utils";
import fse from "fs-extra";


export interface DependenceProps{
    name: string,
    inTmpLocalePath: string,
    inLocalePath: string
}

export default class Dependence{
    private readonly name: string = ''
    private readonly options: DependenceProps
    private graph?:Graph

    constructor(options: DependenceProps) {
        this.options = options
        this.name = options.name
        // console.log('dep options',this.options)
        this.transform()
        this.buildGraph()
    }

    init(){

    }

    transform(){
        const content = readFile(this.options.inLocalePath) || ''
        if(content){
            const cjsCode = transformEsmToCjs(content)
            writeFile(this.options.inTmpLocalePath,cjsCode.code)
        }else{
            console.log(`${this.name}不能为空`)
        }
    }

    buildGraph(){
        if(!fse.existsSync(this.options.inTmpLocalePath)){
            console.log(`${this.options.inTmpLocalePath}文件不存在`)
            return
        }
        this.graph = new Graph({
            path: this.options.inTmpLocalePath
        })
    }



}
