import process from "node:process";
import fs from 'node:fs'
import Module from "./module";
import * as path from "path";
import esbuild from "esbuild";
import {PARSE_NODE_TYPE} from "../constants";
import {evalModuleCode} from "../utils";


interface CommonParsedNodeProp {
  name: string,
  type: string,
  sourcePath: string,
  tempPath: string,
}

export interface BundleParsedNode extends CommonParsedNodeProp{

}

export interface ModuleParsedNode extends CommonParsedNodeProp{

}
export interface DependenceParsedNode extends CommonParsedNodeProp{

}




export interface BeforeParseConfig{
  entryPath:string;
  entryName:string;
  tempDirPath:string,
  targetLocales: string[],
}

export interface BeforeParseBundle {

}




// 解析预处理
function beforeParse(config:BeforeParseConfig):BeforeParseBundle{
  const {
    entryPath,
    entryName,
    tempDirPath,
    targetLocales
  } = config
  const bundle = {}
  function t(nodePath,payload,options){
    const {nodeName,type,tmpFrom} = options
    payload.name = nodeName
    payload.type = type
    payload.sourcePath = nodePath
    payload.tmpPath = path.join(tmpFrom,nodeName)
    if(type === PARSE_NODE_TYPE.BUNDLE){
      fs.mkdirSync(payload.tmpPath,{recursive:true})
      payload.modules = []
      const dirs = fs.readdirSync(payload.sourcePath,{withFileTypes:true,encoding:'utf-8'})
      const targetDirs = dirs.filter(dir=>dir.isDirectory() && targetLocales.includes(dir.name))
      for(let dir of targetDirs){
        const module = {}
        t(path.resolve(payload.sourcePath,dir.name),module,{
          nodeName: dir.name,
          type: PARSE_NODE_TYPE.MODULE,
          tmpFrom: payload.tmpPath
        })
        payload.modules.push(module)
      }
    }else if(type === PARSE_NODE_TYPE.MODULE){
      fs.mkdirSync(payload.tmpPath,{recursive:true})
      payload.deps = []
      const files = fs.readdirSync(payload.sourcePath,{withFileTypes:true,encoding:'utf-8'})
      const targetFiles = files.filter(file=>file.isFile() && /\.js$/.test(file.name))
      for(let file of targetFiles){
        const dep = {}
        t(path.join(payload.sourcePath,file.name),dep,{
          nodeName: file.name,
          type: PARSE_NODE_TYPE.DEPENDENCE,
          tmpFrom: payload.tmpPath
        })
        payload.deps.push(dep)
      }
    }else if(type === PARSE_NODE_TYPE.DEPENDENCE){
      const fileContent = fs.readFileSync(payload.sourcePath,{encoding:'utf-8'})
      const result = esbuild.transformSync(fileContent,{
        charset:'utf8',
        format:'cjs',
        platform:'node',
        target:['node14']
      })
      payload.code = result.code
      payload.default = evalModuleCode({context: __dirname},result.code,nodeName).default
      // console.log('payload',payload)
      fs.writeFileSync( payload.tmpPath,payload.code,{encoding:"utf-8"})
    }
  }
  t(entryPath,bundle,{
    nodeName: entryName,
    type: PARSE_NODE_TYPE.BUNDLE,
    tmpFrom: tempDirPath
  })
  return bundle
}


export interface DoParseConfig{
  mainLocaleName:string
}

export interface ParseBundle{
  mainLocaleModule: Module;
  localesModules: Module[]
}

function doParse(bundle:BeforeParseBundle,config:DoParseConfig):ParseBundle{
  const {mainLocaleName} = config
  let mainLocaleModule: Module
  const localesModules: Module[] = []
  for(const m of bundle.modules){
    const localeModule = new Module(m)
    if(m.name === mainLocaleName){
      mainLocaleModule = localeModule
    }
    localesModules.push(localeModule)
  }
  return {
    mainLocaleModule,
    localesModules
  }
}


export interface ParseConfig{
  entryPath:string;
  entryName:string;
  tempDirPath:string,
  mainLocale: string,
  targetLocales: string[],
}

export interface ParseOutput {

}



export default function parse(config:ParseConfig):ParseOutput {
  try {
    const {
      entryPath,entryName,tempDirPath,mainLocale,targetLocales
    } = config
    if(!fs.existsSync(entryPath)) {
      throw new Error(`${entryPath} not exist!`)
    }
    const beforeParseBundle = beforeParse({
      entryPath,entryName,tempDirPath,targetLocales
    })
    console.log('beforeParseBundle',beforeParseBundle)
    const parseBundle = doParse(beforeParseBundle,{
      mainLocaleName:mainLocale
    })

    return {
      mainLocaleModule: parseBundle.mainLocaleModule,
      localesModules: parseBundle.localesModules
    }
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}
