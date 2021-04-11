import CryptoJS from 'crypto-js'


export const MD5 = (data: string): string => CryptoJS.MD5(data).toString()

export const SHA1 = (data: string): string => CryptoJS.SHA1(data).toString()

export const SHA256 = (data: string): string => CryptoJS.SHA256(data).toString()
