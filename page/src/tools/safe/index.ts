
// import Encrypt from './encrypt'
import Signature from './signature'


export default class Safety {
    static signCanvas = (data: string): string => new Signature().canvasSign(data)
    static signVerify = (data: string, privateKey: string): string | false => new Signature().signVerify(data, privateKey)
}
