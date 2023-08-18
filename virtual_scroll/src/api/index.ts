import axios from 'axios'
import type { AxiosRequestConfig, AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios'
export class Axios {
    public instance: AxiosInstance
    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config)
        this.instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
            return config
        })
        this.instance.interceptors.response.use(
            (res: AxiosResponse) => {
                return res.data
            },
            (err) => {
                return err
            }
        )
    }
}
