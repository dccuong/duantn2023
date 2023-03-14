

import { TPrdCate } from "../models/prdCates";
import axiosClient from "./config";

export const getAll = (): Promise<TPrdCate[]> => {
    return axiosClient.get("/Cateproduct");
};

export const remove = (id: string): Promise<TPrdCate> => {
    return axiosClient.delete(`/Cateproduct/${id}`);
};

export const add = (catePrd: TPrdCate): Promise<TPrdCate> => {
    return axiosClient.post("/Cateproduct", catePrd);
};

export const get = (id: string): Promise<TPrdCate> => {
    return axiosClient.get(`/Cateproduct/${id}`);
};

export const update = (catePrd: TPrdCate): Promise<TPrdCate> => {
    return axiosClient.put(`/Cateproduct/${catePrd._id}`, catePrd);
};

