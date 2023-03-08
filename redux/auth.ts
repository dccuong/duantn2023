import { createSlice } from "@reduxjs/toolkit";
import { Tuser } from "../models/user";

type AuthState = {
    isLogged: boolean;
    currentUser: Tuser | {};
};

const initialState: AuthState = {
    isLogged: false,
    currentUser: {},
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, { payload }) {
            state.isLogged = true;
            state.currentUser = payload;
        },
        logout(state) {
            state.isLogged = false;
            state.currentUser = {};
            localStorage.removeItem("auth_token");
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;