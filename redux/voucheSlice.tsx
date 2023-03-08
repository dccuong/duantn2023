import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { add, get, getAll, remove, update } from "../Api/voucheApi";
import { Tvouche } from "../models/vouche";


type VoucheState = {
    vouches: Tvouche[];
    vouche: Tvouche | {};
};

const initialState: VoucheState = {
    vouches: [],
    vouche: {},
};

export const getVouches = createAsyncThunk("Vouche/getVouches", async () => {
    const response = await getAll();

    return response;
});

export const deleteVouche = createAsyncThunk("Vouche/deleteVouche", async (id: string) => {
    const res = await remove(id);

    return res;
});

export const addVouche = createAsyncThunk("Vouche/addVouche", async (Vouche: any) => {
    const res = await add(Vouche);

    return res;
});

export const getVouche = createAsyncThunk("Vouche/getVouche", async (id: any) => {
    const res = await get(id);

    return res;
});

export const updateVouche = createAsyncThunk("Vouche/updateVouche", async (Vouche: any) => {
    const res = await update(Vouche);

    return res;
});

const VoucheSlice = createSlice({
    name: "Vouche",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getVouches.fulfilled, (state, { payload }) => {
            state.vouches = payload || [];
        });

        builder.addCase(deleteVouche.fulfilled, (state, { payload }) => {
            state.vouches = state.vouches.filter((item) => item._id !== payload?._id);
        });

        builder.addCase(addVouche.fulfilled, (state, { payload }) => {
            state.vouches.push(payload as Tvouche);
        });

        builder.addCase(getVouche.fulfilled, (state, { payload }) => {
            state.vouche = payload as Tvouche;
        });

        builder.addCase(updateVouche.fulfilled, (state, { payload }) => {
            state.vouches = state.vouches = state.vouches.map((item) => (item._id === payload?._id ? payload : item)) as Tvouche[];
        });
    },
});

export default VoucheSlice.reducer;