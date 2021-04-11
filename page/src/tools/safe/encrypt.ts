import Config from '@/global'
import AES from './aes'
import RSA from './rsa'
import random from './random'


export default class Encrypt {
    static encrypt(data: string, publicKey: string) {
        const key = random(16)
        const aesEnc = AES.encrypt(data, key, Config.iv)
        const rsaEnc = RSA.encrypt(key, publicKey)
        return {
            encText: aesEnc,
            encSecKey: rsaEnc
        }
    }
}
