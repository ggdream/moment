import CryptoJS from 'crypto-js'


export class Hex {
    static stringify = (data: string): string => CryptoJS.enc.Hex.stringify(CryptoJS.enc.Utf8.parse(data))
    static parse = (data: string): CryptoJS.lib.WordArray => CryptoJS.enc.Hex.parse(data)
}

export class Base64 {
    static stringify = (data: string): string => CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(data))
    static parse = (data: string): CryptoJS.lib.WordArray => CryptoJS.enc.Base64.parse(data)
}

export class Utf8 {
    static stringify = (data: CryptoJS.lib.WordArray): string => CryptoJS.enc.Utf8.stringify(data)
    static parse = (data: string): CryptoJS.lib.WordArray => CryptoJS.enc.Utf8.parse(data)
}

export default Utf8
