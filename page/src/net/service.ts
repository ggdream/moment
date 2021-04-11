import Config from '@/global'
import * as model from '@/model'
import Request from '@/tools/http'


export default class ServiceNet extends Request {
    constructor() {
        super({
            baseURL: Config.baseURL,
            timeout: Config.timeout,
        })
    }

    getMetaInfo = () => this.get<model.MetaInfoImple>('/meta/info')
    getRecords = (data: model.RecordReqModel) => this.get<model.RecordGetImple>('/record/get', data)
    setRecord = (data: model.RecordSaveModel) => this.get<model.RecordSetImple>('/record/set', data)
    getText = (vid: string) => this.get<model.TextImple>('/record/text', {v: vid})
}
