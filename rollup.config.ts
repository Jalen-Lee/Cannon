import {defineConfig} from "rollup";
// rollup处理typescript的插件
import typescript from '@rollup/plugin-typescript';
// resolve将我们编写的源码与依赖的第三方库进行在之前的文章里面也有提到但是这里使用的@rollup/plugin-node-resolve
import resolve from '@rollup/plugin-node-resolve';
// 解决rollup.js无法识别CommonJS模块，这里使用的是@rollup/plugin-commonjs并不是之前提到的rollup-plugin-commonjs
import commonjs from "@rollup/plugin-commonjs";
import tsConfig from './tsconfig.json'


export default defineConfig({
    input: 'src/index.ts',
    output:[
        {
            file: `dist/cTrans.cjs.js`,
            // commonjs格式
            format: 'cjs',
        },
        {
            file: `dist/cTrans.es.js`,
            // es module
            format: 'es',
        },
    ],
    plugins: [
        commonjs(),
        typescript(),
        resolve(),
    ],
    external:['esbuild']
})
