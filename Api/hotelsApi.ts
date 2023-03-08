import axios from "axios";
import { typeHotel, typeRes, typeRess } from "../models/typeHotel";
import axiosClient from "./config"

export const getAll = (page: number, pagesize: number): Promise<typeRess> => {
    return axiosClient.get(`bo/v1/hotels?page=${page}&pageSize=${pagesize}`)
}
export const getAllClient = (page: number, pagesize: number): Promise<any> => {
    return axios.get(`https://lionfish-app-k7djj.ondigitalocean.app/api/v1/hotel?page=${page}&pageSize=${pagesize}`, {
        auth: {
            username: "tripfinder",
            password: "438d25c3665d6c9d5535f1cbc41c3710"
        }
    })
}
export const remove = (id: number): Promise<typeHotel> => {
    return axiosClient.delete(`bo/v1/hotels/${id}`)
};
export const add = (Hotle: any): Promise<typeRes> => {
    return axiosClient.post("bo/v1/hotels", Hotle);
};
export const get = (id: number): Promise<typeRes> => {
    return axiosClient.get(`bo/v1/hotels/${id}`);
}
export const update = (Hotle: typeHotel): Promise<typeHotel> => {
    return axiosClient.put(`bo/v1/hotels/${Hotle.ID}`, Hotle);
};

export const imgggg = (Hotle: any): Promise<any> => {
    return axiosClient.post(`bo/v1/images`, Hotle);
};