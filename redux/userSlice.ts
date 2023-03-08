import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { add, get, getAll, remove, update } from "../Api/userApi";
import { Tuser } from "../models/user";

type UserState = {
    users: Tuser[];
    user: Tuser | {};
};

const initialState: UserState = {
    users: [],
    user: {},
};

export const getUsers = createAsyncThunk("user/getUsers", async () => {
    const response = await getAll();

    return response;
});

export const deleteUser = createAsyncThunk("user/deleteUser", async (id: string) => {
    const res = await remove(id);

    return res;
});

export const addUser = createAsyncThunk("user/addUser", async (user: any) => {
    const res = await add(user);

    return res;
});

export const getUser = createAsyncThunk("user/getUser", async (id: any) => {
    const res = await get(id);

    return res;
});

export const updateUser = createAsyncThunk("user/updateUser", async (user: any) => {
    const res = await update(user);

    return res;
});

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, { payload }) => {
            state.users = payload || [];
        });

        builder.addCase(deleteUser.fulfilled, (state, { payload }) => {
            state.users = state.users.filter((item) => item._id !== payload?._id);
        });

        builder.addCase(addUser.fulfilled, (state, { payload }) => {
            state.users.push(payload as Tuser);
        });

        builder.addCase(getUser.fulfilled, (state, { payload }) => {
            state.user = payload as Tuser;
        });

        builder.addCase(updateUser.fulfilled, (state, { payload }) => {
            state.users = state.users = state.users.map((item) => (item._id === payload?._id ? payload : item)) as Tuser[];
        });
    },
});

export default userSlice.reducer;