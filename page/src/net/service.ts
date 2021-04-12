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

    getMetaInfo = (): Promise<model.MetaInfoImple> => this.get<model.MetaInfoImple>('/meta/info')
    getRecords = (data: model.RecordReqModel): Promise<model.RecordGetImple> => this.get<model.RecordGetImple>('/record/get', data)
    setRecord = (data: model.RecordSaveModel): Promise<model.RecordSetImple> => this.post<model.RecordSetImple>('/record/set', data)
    getText = (vid: string): Promise<model.TextImple> => this.get<model.TextImple>('/record/text', {v: vid})
    getTokenByVerify = (data: model.VerifyModel): Promise<model.VerifyImple> => this.post<model.VerifyImple>('/verify', data)
    async uploadImage(file: File): Promise<model.ImageImple> {
        const form = new FormData()
        form.append('file', file)
        const res = await this.requester.post('/record/image', form, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        return res.data
    }
}
