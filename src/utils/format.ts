/**
 * @description
 * @param value
 */
import PendingLocale = global.PendingLocale;

export function resolveRawLocaleToPendingLocale(
    value:string,
): PendingLocale{
    const slots: string[] = []
    const pendingText = value.replace(/{(.*?)}/g,function (item,p1) {
        slots.push(p1.trim())
        return '😛'
    })
    return {
        rawText: value,
        pendingText,
        slots,
    }
}

export function revertPendingLocaleToRawLocale(pendingObj:PendingLocale){
    const {rawText,pendingText,slots} = pendingObj
    return pendingText.replace(/😛/g, function (item) {
        const slot = slots.shift()
        return `{${slot}}`
    })
}










