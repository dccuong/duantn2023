import { Tuser, typeUsers, typeUser, typeAUser } from "../models/user";
import axiosClient from "./config";
export const loginnn = (user: Tuser): Promise<{ token: string; user: Tuser }> => {
    return axiosClient.post("login", user);
};
export const logouttt = (): Promise<{ message: string }> => {
    return axiosClient.post("logout");
};
export const loginGg = () => {
    axiosClient.get("auth/google/login");

};
export const addUser = (value: typeUser): Promise<typeAUser> => {
    return axiosClient.post("bo/v1/users", value)
}
export const updateUser = (value: typeUser): Promise<typeUser> => {
    return axiosClient.put(`bo/v1/users/${value.ID}`, value)
}
export const getUser = (): Promise<typeUsers> => {
    return axiosClient.get("bo/v1/users")
}
export const get = (ID: any): Promise<typeAUser> => {
    return axiosClient.get(`bo/v1/users/${ID}`)
}
export const deleteUser = (id: any): Promise<typeUser> => {
    return axiosClient.delete(`bo/v1/users/${id}`)
}