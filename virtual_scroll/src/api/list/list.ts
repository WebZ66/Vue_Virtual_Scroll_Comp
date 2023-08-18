import { Axios } from '../index'
import type { IListItem } from './list'
const request = new Axios({
    baseURL: 'http://localhost:4000/api',
    timeout: 5000
})

export const getList = (num: number) => {
    return request.instance<any, IListItem>({
        url: '/data?num=' + num,
        method: 'get'
    })
}
