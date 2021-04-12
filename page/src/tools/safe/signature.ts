import {Canvas} from './browser'
import RSA from './rsa'

export default class Signature {
    canvasSign = (data: string): string => new Canvas().get(data)
    signVerify = (data: string, privateKey: string): string | false => RSA.sign(data, privateKey)

}
