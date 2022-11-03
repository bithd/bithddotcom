export function isCN(language: string) : boolean {
    if (language == 'zh-cn' || language == 'zh-tw' || language == 'zh-hk') return true
    return false
}

export function contentfulLang(language: string) : string {
    if (language == 'zh-cn' || language == 'zh-tw' || language == 'zh-hk') return 'zh'
    return 'en'
}

export function getMonth(time: string) : string {
    if (time != null && time.length > 0) {
        const timeArr = time.split('-')
        if (timeArr[1] != null && timeArr[1].length > 0 && parseInt(timeArr[1]) >= 1 && parseInt(timeArr[1]) <= 12) {
            const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
            return monthArr[parseInt(timeArr[1]) - 1]
        }
    }
    return ''
}

export function getDay(time: string) : string {
    if (time != null && time.length > 0) {
        const timeArr = time.split('-')
        if (timeArr[2] != null && timeArr[2].length > 0 && parseInt(timeArr[2]) >= 1 && parseInt(timeArr[2]) <= 31) {
            return timeArr[2]
        }
    }
    return ''
}
 
export function verifyHost() : boolean {
    if (typeof window !== 'undefined') {
        const dev = process.env.NODE_ENV !== 'production'
        return dev ? true : window.location.host == 'bitpie.com' ? true : false
    }
    return false
}
 