import { cac } from 'cac'
import { VERSION } from './constants'
import path from 'node:path'
import process from "node:process";
import {filterDuplicateOptions, resolveConfig, UserConfig} from "./utils";
import os from "node:os";
import TranslateService from "./core/TranslateService";



const cli = cac('cannon')

cli.command('run','翻译')
    .option('-C,--config <configFile>',`Use this config file (if argument is used but value is unspecified, defaults to cannon.config.js)`)
    .option('-F,--full',`全量翻译`)
    .option('-D,--diff',`增量翻译`)
    .action(async (options)=>{
      let config: UserConfig | undefined
      const defaultConfig:UserConfig = {
        root: process.cwd(),
        tmpDirRoot: os.tmpdir(),
        entryPoints:{
          name:'locales',
          input: path.resolve('cannon.config.js'),
          output: path.resolve()
        },
        plugins: []
      }
      if(options.config){
        config = await resolveConfig({
          configFile: options.config
        })
      }
      const inlineConfig = Object.assign(defaultConfig,config)
      console.log('inlineConfig',inlineConfig)
      if(Array.isArray(inlineConfig.entryPoints)){

      }else{
        const translateService = new TranslateService({
          tmpDirRoot: inlineConfig.tmpDirRoot,
          entryPoint:inlineConfig.entryPoints
        })
        translateService.run()
      }
    })

cli.command('check','翻译检查')
    .option('-C,--config <file>',`添加配置文件`)
    .option('-O,--out',`生产检查文档的路径`)
    .action((options)=>{
        // console.log('options',options)
    })

// Immediate mode
cli.command('[entryPath]','Immediate mode: No configuration file translation')
    .option('-o,--out <outputPath>','Translation product output path')
    .option('-f,--full','Full volume translation',{default:false})
    .option('-i,--increase','Incremental translation',{default:true})
    .option('--no-warning','Disable Translation Warnings',{default:false})
    .action((entryPath,options)=>{
        // if(!entryPath){
        //     cli.outputHelp()
        //     return
        // }
        // filterDuplicateOptions(options)
        // try {
        //
        // }catch (e){
        //     process.exit(1)
        // }
    })


cli.help()
cli.version(VERSION)
cli.parse()
