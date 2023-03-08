import { TSlider } from "../models/slider";
import axiosClient from "./config";

export const getAll = (): Promise<TSlider[]> => {
  return axiosClient.get("/Slider");
};

export const remove = (id: string): Promise<TSlider> => {
  return axiosClient.delete(`/Slider/${id}`);
};

export const add = (slider: TSlider): Promise<TSlider> => {
  return axiosClient.post("/Slider", slider);
};

export const get = (id: any): Promise<TSlider> => {
  return axiosClient.get(`/Slider/${id}`);
};

export const update = (slider: TSlider): Promise<TSlider> => {
  return axiosClient.put(`/Slider/${slider._id}`, slider);
};
