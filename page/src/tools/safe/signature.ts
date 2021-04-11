import {Canvas} from './browser'

export default class Signature {
    canvasSign = (data: string): string => new Canvas().get(data)
}
