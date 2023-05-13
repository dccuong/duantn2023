import { Product, TotalPriceAdmin } from "../models/product";
import axiosClient, { axiosServer } from "./config";

export const getAll = (): Promise<Product[]> => {
  return axiosServer.get("/product");
};
export const getmost = (): Promise<Product[]> => {
  return axiosServer.get("/maxbuys");
};

export const getleast1 = (): Promise<TotalPriceAdmin> => {
  return axiosServer.get("/total-price");
};
export const getleast2 = (): Promise<TotalPriceAdmin> => {
  return axiosServer.get("/total-price-7-date");
};
export const getleast3 = (): Promise<TotalPriceAdmin> => {
  return axiosServer.get("/total-price-date");
};
export const remove = (id: string): Promise<Product> => {
  return axiosClient.delete(`/product/${id}`);
};
export const add = (product: Product): Promise<Product> => {
  return axiosClient.post("/product", product);
};
export const get = (id?: string): Promise<Product> => {
  return axiosClient.get(`/product/${id}`);
};
export const getS = (slug?: string): Promise<Product> => {
  return axiosServer.get(`/product/${slug}/getBySlug`);
};
export const update = (product: Product): Promise<Product> => {
  return axiosClient.put(`/product/${product._id}`, product);
};

export const searchProduct = (search: string): Promise<Product[]> => {
  return axiosClient.get(`/product/search/?key=${search}`);
};
