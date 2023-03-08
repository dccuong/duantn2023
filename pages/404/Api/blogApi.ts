
import { Tblog } from "../models/blogs";
import { axiosServer } from "./config";
import axiosClient from "./config";

export const getAll = (): Promise<Tblog[]> => {
    return axiosServer.get("/news");
};

export const remove = (id: string): Promise<Tblog> => {
    return axiosClient.delete(`/news/${id}`);
};

export const add = (blog: Tblog): Promise<Tblog> => {
    return axiosClient.post("/news", blog);
};

export const get = (id: string): Promise<Tblog> => {
    return axiosServer.get(`/news/${id}`);
};

export const update = (blog: Tblog): Promise<Tblog> => {
    return axiosClient.put(`/news/${blog._id}`, blog);
};

export const blogCate = (id: any) => {
    return axiosClient.get(`/news?ct=${id}`);
};
export const getBySlug = (slug: any): Promise<Tblog> => {
    return axiosServer.get(`/news/${slug}/getBySlug`)
}