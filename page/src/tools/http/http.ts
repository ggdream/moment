import axios, {
    AxiosRequestConfig,
    AxiosInstance
} from 'axios'
import qs from 'qs'


export default class Request {
    protected requester: AxiosInstance
    constructor(config?: AxiosRequestConfig) {
        this.requester = axios.create(config)
    }

    // eslint-disable-next-line
    async get<T = any>(url: string, query?: any): Promise<T> {
        const res = await this.requester.get(url, {params: query})
        return res.data as T
    } 
    // eslint-disable-next-line
    async post<T = any>(url: string, data?: any): Promise<T> {
        const res = await this.requester.post(url, qs.stringify(data), {
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        })
        return res.data as T
    } 
}
