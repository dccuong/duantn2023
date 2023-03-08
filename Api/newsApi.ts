import { typeBlog, typeblogRes, typeblogRess } from "../models/typeBlog";
import axiosClient from "./config"
export const getAll = (page: number): Promise<typeblogRess> => {
    return axiosClient.get(`/bo/v1/blogs?feature=false&page=${page}&pageSize=9`)
}
export const get = (id: any): Promise<typeblogRes> => {
    return axiosClient.get(`bo/v1/blogs/${id}`);
};
export const remove = (id: number): Promise<typeBlog> => {
    return axiosClient.delete(`bo/v1/blogs/${id}`)
};
export const update = (values: typeBlog): Promise<typeBlog> => {
    return axiosClient.put(`bo/v1/blogs/${values.ID}`, values)
}
export const add = (value: typeBlog): Promise<typeblogRes> => {
    return axiosClient.post('bo/v1/blogs', value)
}
