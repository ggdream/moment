import Encrypt from './encrypt'
import Signature from './signature'


export default class Safety {
    static sign(data: string): string {
        return new Signature().canvasSign(data)
    }
}
