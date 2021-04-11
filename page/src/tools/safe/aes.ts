import CryptoJS from 'crypto-js'


const meta = {
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
}

export default class AES {
    static encrypt = (data: string, key: string, iv: string): string => CryptoJS.AES.encrypt(
        data,
        CryptoJS.enc.Utf8.parse(key),
        {
            iv: CryptoJS.enc.Utf8.parse(iv),
            mode: meta.mode,
            padding: meta.padding
        }
    ).toString()

    static decrypt = (data: string, key: string, iv: string): string => CryptoJS.AES.decrypt(
        data,
        CryptoJS.enc.Utf8.parse(key),
        {
            iv: CryptoJS.enc.Utf8.parse(iv),
            mode: meta.mode,
            padding: meta.padding
        }
    ).toString(CryptoJS.enc.Utf8)
}
