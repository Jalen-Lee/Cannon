import * as process from "process";

export default {
    root: process.cwd(),
    tmpDirRoot: process.cwd(),
    entryPoints: {
        name:'david',
        input:'/Users/lijialong/Documents/DMS/cTrans/test/locales',
        output: process.cwd(),
        mainLocale:'en-US',
        targetLocales: [
            'de-DE',
            'el-GR',
            'en-US',
            'ja-JP',
            'nl-NL',
            'ru-RU',
            'zh-CN',
            'zh-TW'
        ]
    },
    plugins:[

    ]
}
