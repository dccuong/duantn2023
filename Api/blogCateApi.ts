

import { TblogCate } from "../models/blogCates";
import axiosClient from "./config";

export const getAll = (): Promise<TblogCate[]> => {
    return axiosClient.get("/CategoryNews");
};

export const remove = (id: string): Promise<TblogCate> => {
    return axiosClient.delete(`/CategoryNews/${id}`);
};

export const add = (cateNew: TblogCate): Promise<TblogCate> => {
    return axiosClient.post("/CategoryNews", cateNew);
};

export const get = (id: string): Promise<TblogCate> => {
    return axiosClient.get(`/CategoryNews/${id}`);
};

export const update = (cateNew: TblogCate): Promise<TblogCate> => {
    return axiosClient.put(`/CategoryNews/${cateNew._id}`, cateNew);
};

