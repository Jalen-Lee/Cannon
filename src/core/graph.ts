import {loadCjsFile, resolveRawLocaleToPendingLocale} from "../utils";
import * as process from "process";

export interface GraphOptions{
    path:string
}

export default class Graph {
    private readonly options:GraphOptions
    private readonly map: Map<string,any> = new Map()
    constructor(options:GraphOptions) {
        this.options = options
        this.build()
    }

    private build(){
        try {
            const data = loadCjsFile(this.options.path)
            for(const [key,value] of Object.entries(data)){
                if(!this.map.has(key)){
                    this.map.set(key,resolveRawLocaleToPendingLocale(value as string))
                }else{
                    throw new Error(`${key} 已存在`)
                }
            }
        }catch (e){
            console.error(e)
            process.exit()
        }
    }

    public getItem(key:string){
        if(!this.map.has(key)) return
        return this.map.get(key)
    }

    get keys(){
        return [...this.map.keys()]
    }


}
