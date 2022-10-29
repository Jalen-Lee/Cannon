import esbuild from "esbuild";

/**
 * @description 将esm代码转换为cjs代码
 * @param input
 */
export function transformEsmToCjs(input: string){
    return esbuild.transformSync(input,{
        format:'cjs'
    })
}
