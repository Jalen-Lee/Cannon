import axios from "axios";

const LANG_MAP = {
    'de-DE':'de-rDE',
    'el-GR':'el-rGR',
    'en-US':'en-rUS',
    'ja-JP':'ja-rJP',
    'nl-NL':'nl-rNL',
    'ru-RU':'ru-rRU',
    'zh-CN':'zh-rCN',
    'zh-TW':'zh-rTW'
}

interface TranslateMultipleReqDto {
    fromLang: string,
    originList: string[],
    toLang: string
}


export function translateMultiple(payload:TranslateMultipleReqDto){
    const {
        fromLang,toLang,originList
    } = payload
    // return axios.post('http://172.17.84.152:8001/translateMulti',{
    //     "disableCache": disableCache,
    //     "fromLang": LANG_MAP[from],
    //     "originList": data,
    //     "toLang": LANG_MAP[to]
    // })
}

export function translateSingle(){

}
