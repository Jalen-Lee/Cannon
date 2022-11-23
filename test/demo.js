const fs = require('fs')
const esbuild = require('esbuild')
const path = require("node:path");
const NativeModule = require('module')

const tmpDir = path.resolve(process.cwd(),'.test')
if(fs.existsSync(tmpDir)) fs.rmSync(tmpDir,{recursive:true})
fs.mkdirSync(tmpDir,{recursive:true})
const targetLocales = [
    'de-DE',
    'el-GR'
]

const beforeParse = (config)=>{
    const {
        entryPath,
        entryName,
    } = config
    const bundle = {}
    function t(nodePath,payload,options){
        const {nodeName,type,tmpFrom} = options
        payload.name = nodeName
        payload.type = type
        payload.sourcePath = nodePath
        payload.tmpPath = path.join(tmpFrom,nodeName)
        if(type === 'bundle'){
            fs.mkdirSync(payload.tmpPath,{recursive:true})
            payload.modules = []
            const dirs = fs.readdirSync(payload.sourcePath,{withFileTypes:true,encoding:'utf-8'})
            const targetDirs = dirs.filter(dir=>dir.isDirectory() && targetLocales.includes(dir.name))
            for(let dir of targetDirs){
                const module = {}
                t(path.resolve(payload.sourcePath,dir.name),module,{
                    nodeName: dir.name,
                    type: 'module',
                    tmpFrom: payload.tmpPath
                })
                payload.modules.push(module)
            }
        }else if(type === 'module'){
            fs.mkdirSync(payload.tmpPath,{recursive:true})
            payload.deps = []
            const files = fs.readdirSync(payload.sourcePath,{withFileTypes:true,encoding:'utf-8'})
            const targetFiles = files.filter(file=>file.isFile() && /\.js$/.test(file.name))
            for(let file of targetFiles){
                const dep = {}
                t(path.join(payload.sourcePath,file.name),dep,{
                    nodeName: file.name,
                    type: 'dep',
                    tmpFrom: payload.tmpPath
                })
                payload.deps.push(dep)
            }
        }else if(type === 'dep'){
            const fileContent = fs.readFileSync(payload.sourcePath,{encoding:'utf-8'})
            const result = esbuild.transformSync(fileContent,{
                charset:'utf8',
                format:'cjs',
                platform:'node',
                target:['node14']
            })
            payload.code = result.code
            fs.writeFileSync( payload.tmpPath,payload.code,{encoding:"utf-8"})
        }
    }
    t(entryPath,bundle,{
        nodeName: entryName,
        type: 'bundle',
        tmpFrom: tmpDir
    })
    return bundle
}

function evalModuleCode(loaderContext, code, filename){
    const module = new NativeModule(filename, loaderContext);
    module.paths = NativeModule._nodeModulePaths(loaderContext.context);
    module.filename = filename;
    module._compile(code, filename);
    // console.log(module)
    return module.exports;
}

// const content = fs.readFileSync('/Users/lijialong/Documents/DMS/cTrans/.cTrans/locales/en-US/exception.js',{encoding:'utf8'})
// console.log('content',content)

// console.log(evalModuleCode({context: __dirname},content,'account.js').default)


const doParse = (bundle)=>{

    return {
        mainModule:'',
        modules:[]
    }
}


console.log(__dirname)


// const parseBundle = traversal({
//     entryPath:'/Users/lijialong/Documents/DMS/cTrans/test/locales',
//     entryName:'david'
// })
// console.log('parseBundle',parseBundle)
// console.log(path.join('/','local','cc'))
