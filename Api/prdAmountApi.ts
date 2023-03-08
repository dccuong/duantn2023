import { TprdAmount } from "../models/prdAmount";
import axiosClient from "./config";

export const getAll = (): Promise<TprdAmount[]> => {
    return axiosClient.get("/ProductAmout");
};

export const remove = (id: string): Promise<TprdAmount> => {
    return axiosClient.delete(`/ProductAmout/${id}`);
};

export const add = (amount: TprdAmount): Promise<TprdAmount> => {
    return axiosClient.post("/ProductAmout", amount);
};

export const get = (id: string): Promise<TprdAmount> => {
    return axiosClient.get(`/ProductAmout/${id}`);
};

export const update = (amount: TprdAmount): Promise<TprdAmount> => {
    return axiosClient.put(`/ProductAmout/${amount._id}`, amount);
};
