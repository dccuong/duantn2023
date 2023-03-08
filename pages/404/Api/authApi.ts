import { Tuser } from "../models/user";
import axiosClient from "./config";
export const loginnn = (user: Tuser): Promise<{ token: string; user: Tuser }> => {
    return axiosClient.post("signin", user);
};
export const addUser = (value: Tuser): Promise<{ token: string }> => {
    return axiosClient.post("signup", value)
}