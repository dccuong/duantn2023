import { typeTours, typeResTour, typeRessTour } from "../models/typeTours";
import axiosClient from "./config"

export const getAll = (page: number): Promise<typeRessTour> => {
    return axiosClient.get(`bo/v1/tours?page=${page}&pageSize=20`)
}

export const remove = (id: number): Promise<typeTours> => {
    return axiosClient.delete(`bo/v1/tours/${id}`)
};
export const add = (tours: typeTours): Promise<typeResTour> => {
    return axiosClient.post("bo/v1/tours", tours);
};
export const get = (id: number): Promise<typeResTour> => {
    return axiosClient.get(`bo/v1/tours/${id}`);
}
export const update = (tours: typeTours): Promise<typeTours> => {
    return axiosClient.put(`bo/v1/tours/${tours.ID}`, tours);
};
