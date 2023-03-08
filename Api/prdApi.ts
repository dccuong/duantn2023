import { Tprd } from "../models/prd";
import axiosClient from "./config";

export const getAll = (): Promise<Tprd[]> => {
    return axiosClient.get("/Product");
};

export const remove = (id: string): Promise<Tprd> => {
    return axiosClient.delete(`/Product/${id}`);
};

export const add = (product: Tprd): Promise<Tprd> => {
    return axiosClient.post("/Product", product);
};

export const get = (id: string): Promise<Tprd> => {
    return axiosClient.get(`/Product/${id}`);
};

export const update = (product: Tprd): Promise<Tprd> => {
    return axiosClient.put(`/Product/${product._id}`, product);
};
