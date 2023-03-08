import { TprdSize } from "../models/prdSize";
import axiosClient from "./config";

export const getAll = (): Promise<TprdSize[]> => {
    return axiosClient.get("/Size");
};

export const remove = (id: string): Promise<TprdSize> => {
    return axiosClient.delete(`/Size/${id}`);
};

export const add = (size: TprdSize): Promise<TprdSize> => {
    return axiosClient.post("/Size", size);
};

export const get = (id: string): Promise<TprdSize> => {
    return axiosClient.get(`/Size/${id}`);
};

export const update = (size: TprdSize): Promise<TprdSize> => {
    return axiosClient.put(`/Size/${size._id}`, size);
};
