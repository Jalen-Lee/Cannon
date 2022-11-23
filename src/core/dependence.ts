import Graph from "./graph";
import {evalModuleCode} from "../utils";

export interface DependenceProps{
    name: string;
    sourcePath: string;
    tempPath: string;
    code: string;
    default: Record<string, string>
}

export default class Dependence {
    private readonly props: DependenceProps
    private readonly name: string = ''
    private readonly code: string = ''

    private graph: Graph

    constructor(props: DependenceProps) {
        this.props = props
        this.name = props.name
        this.code = props.code
        this.graph = new Graph({
            map: props.default
        })
    }
}

