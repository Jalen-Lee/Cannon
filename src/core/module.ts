import Dependence from "./dependence";
import Bundle from "./bundle";
import * as path from "path";
import fse from "fs-extra";
import {readFiles} from "../utils";

export interface ModuleProps {
    name: string,
    sourcePath: string,
    tempPath:string,
    deps: any[]
}

export default class Module {
    private props: ModuleProps
    public name: string = ''
    private rawDeps: any[] = []
    private deps: Dependence[]


    constructor(props: ModuleProps) {
        this.props = props
        this.name = props.name
        this.rawDeps = props.deps
        this.deps = this.rawDeps.map(d=>{
            return new Dependence(d)
        })
    }

    private resolveDeps(){

    }
}
