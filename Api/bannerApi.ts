import { typeBanner, typeResBanner, typeRessBanner } from "../models/typeBanner";
import axiosClient from "./config"

export const getAll = (page: number, pagesize: number): Promise<typeRessBanner> => {
    return axiosClient.get(`bo/v1/ad-banners?page=${page}&pageSize=${pagesize}`)
}
export const remove = (id: number): Promise<typeBanner> => {
    return axiosClient.delete(`bo/v1/ad-banners/${id}`)
};
export const add = (Hotle: any): Promise<typeResBanner> => {
    return axiosClient.post("bo/v1/ad-banners", Hotle);
};
export const get = (id: number): Promise<typeResBanner> => {
    return axiosClient.get(`bo/v1/ad-banners/${id}`);
}
export const update = (Hotle: typeBanner): Promise<typeBanner> => {
    return axiosClient.put(`bo/v1/ad-bannesr/${Hotle.ID}`, Hotle);
};

export const imgggg = (Hotle: any): Promise<any> => {
    return axiosClient.post(`bo/v1/images`, Hotle);
};