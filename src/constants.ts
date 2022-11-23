import { fileURLToPath } from 'node:url'
import { readFileSync } from 'node:fs'

const { version } = JSON.parse(
    readFileSync(new URL('../package.json', import.meta.url)).toString()
)

export const VERSION = version


export const DEFAULT_CONFIG_FILES = [
    'cannon.config.js',
    'cannon.config.mjs',
    'cannon.config.ts',
    'cannon.config.cjs',
    'cannon.config.mts',
    'cannon.config.cts'
]

export const PARSE_NODE_TYPE = {
    BUNDLE: 0,
    MODULE: 1,
    DEPENDENCE: 2
}

// 地区代码
export const LOCALES_CODE = [
    'de-DE',
    'el-GR',
    'en-US',
    'ja-JP',
    'nl-NL',
    'ru-RU',
    'zh-CN',
    'zh-TW'
]
