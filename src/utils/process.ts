import {resolveRawLocaleToPendingLocale} from "./format";

export function processRawLocaleObjToPendingLocaleObj(localeObj: Record<string, string>){
    const output = new Map()
    for (const [key,value] of Object.entries(localeObj)){
        output.set(key,resolveRawLocaleToPendingLocale(value))
    }
    return output
}
