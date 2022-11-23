export interface GraphProps{
    map: Record<string, string>
}

export default class Graph {
    private readonly props:GraphProps
    private readonly map: Map<string,any> = new Map()

    constructor(props:GraphProps) {
        this.props = props
        this.resolve(props.map)
    }

    private resolve(obj:Record<string,string>){
        for(const [key,value] of Object.entries(obj)){
            const slots: string[] = []
            const postText = value.replace(/{(.*?)}/g,function (item,p1) {
                slots.push(p1.trim())
                return '😛'
            })
            this.map.set(key, {
                rawText: value,
                postText,
                slots
            })
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
