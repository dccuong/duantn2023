import { TprdColor } from "../models/prdColor";
import axiosClient from "./config";

export const getAll = (): Promise<TprdColor[]> => {
    return axiosClient.get("/Color");
};

export const remove = (id: string): Promise<TprdColor> => {
    return axiosClient.delete(`/Color/${id}`);
};

export const add = (color: TprdColor): Promise<TprdColor> => {
    return axiosClient.post("/Color", color);
};

export const get = (id: string): Promise<TprdColor> => {
    return axiosClient.get(`/Color/${id}`);
};

export const update = (color: TprdColor): Promise<TprdColor> => {
    return axiosClient.put(`/Color/${color._id}`, color);
};
