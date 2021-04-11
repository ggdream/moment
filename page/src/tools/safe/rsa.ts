import JSEncrypt from 'jsencrypt'


interface Keys {
    publicKey?: string;
    privateKey?: string;
}

export default class RSA {
    private en: JSEncrypt

    constructor(keys: Keys) {
        this.en = new JSEncrypt({})
        this.en.setPublicKey(keys.publicKey === undefined ? '' : keys.publicKey)
        this.en.setPrivateKey(keys.privateKey === undefined ? '' : keys.privateKey)
    }

    public setPublicKey = (publicKey: string): void => this.en.setPublicKey(publicKey)

    public setPrivateKey = (privateKey: string): void => this.en.setPrivateKey(privateKey)

    public encrypt = (data: string) => this.en.encrypt(data)

    public decrypt = (data: string) => this.en.decrypt(data)


    static encrypt(data: string, publicKey: string) {
        const e = new JSEncrypt({})
        e.setPublicKey(publicKey)
        return e.encrypt(data)
    }

    static decrypt(data: string, privateKey: string) {
        const e = new JSEncrypt({})
        e.setPrivateKey(privateKey)
        return e.decrypt(data)
    }
}
