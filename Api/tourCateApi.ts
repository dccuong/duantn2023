import { typeRessTourCate, typeResTourCate, typeTourCates } from "../models/typeTcate";
import axiosClient from "./config"

export const getAll = (page: number): Promise<typeRessTourCate> => {
    return axiosClient.get(`bo/v1/tourcategorys?page=${page}&pageSize=20`)
}

export const remove = (id: number): Promise<typeTourCates> => {
    return axiosClient.delete(`bo/v1/tourcategorys/${id}`)
};
export const add = (cate: typeTourCates): Promise<typeResTourCate> => {
    return axiosClient.post("bo/v1/tourcategorys", cate);
};
export const get = (id: number): Promise<typeResTourCate> => {
    return axiosClient.get(`bo/v1/tourcategorys/${id}`);
}
export const update = (tours: typeTourCates): Promise<typeTourCates> => {
    return axiosClient.put(`bo/v1/tourcategorys/${tours.ID}`, tours);
};
