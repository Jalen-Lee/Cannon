import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import {defineConfig} from "rollup";
import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import json from '@rollup/plugin-json'
import tsConfig from './tsconfig.json';


const pkg = JSON.parse(
    readFileSync(new URL('./package.json', import.meta.url)).toString()
)
const __dirname = fileURLToPath(new URL('.', import.meta.url))


export default defineConfig({
    input: {
        index: path.resolve(__dirname,'src/index.ts'),
        cli: path.resolve(__dirname,'src/cli.ts'),
        constants: path.resolve(__dirname, 'src/constants.ts')
    },
    output:[
        {
            dir: path.resolve(__dirname,'dist'),
            // file: `cTrans.cjs.js`,
            // commonjs格式
            format: 'cjs',
        },
    ],
    plugins: [
        json(),
        commonjs(),
        nodeResolve(),
        typescript({
            tsconfig: path.resolve(__dirname,'./tsconfig.json')
        }),
    ],
    external:['esbuild'],
})
