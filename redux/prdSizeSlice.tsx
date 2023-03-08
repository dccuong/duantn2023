import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { add, get, getAll, remove, update } from "../Api/prdSizeApi";
import { TprdSize } from "../models/prdSize";

type prdSizeState = {
    prdSizes: TprdSize[];
    prdSize: TprdSize | {};
};

const initialState: prdSizeState = {
    prdSizes: [],
    prdSize: {},
};

export const getprdSizes = createAsyncThunk("PrdSize/getprdSizes", async () => {
    const response = await getAll();

    return response;
});

export const deleteprdSize = createAsyncThunk("PrdSize/deleteprdSize", async (id: string) => {
    const res = await remove(id);

    return res;
});

export const addprdSize = createAsyncThunk("PrdSize/addprdSize", async (prdSize: any) => {
    const res = await add(prdSize);

    return res;
});

export const getprdSize = createAsyncThunk("PrdSize/getprdSize", async (id: any) => {
    const res = await get(id);

    return res;
});

export const updateprdSize = createAsyncThunk("PrdSize/updateprdSize", async (prdSize: any) => {
    const res = await update(prdSize);

    return res;
});

const prdSizeSlice = createSlice({
    name: "PrdSize",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getprdSizes.fulfilled, (state, { payload }) => {
            state.prdSizes = payload || [];
        });

        builder.addCase(deleteprdSize.fulfilled, (state, { payload }) => {
            state.prdSizes = state.prdSizes.filter((item) => item._id !== payload?._id);
        });

        builder.addCase(addprdSize.fulfilled, (state, { payload }) => {
            state.prdSizes.push(payload as TprdSize);
        });

        builder.addCase(getprdSize.fulfilled, (state, { payload }) => {
            state.prdSize = payload as TprdSize;
        });

        builder.addCase(updateprdSize.fulfilled, (state, { payload }) => {
            state.prdSizes = state.prdSizes = state.prdSizes.map((item) => (item._id === payload?._id ? payload : item)) as TprdSize[];
        });
    },
});

export default prdSizeSlice.reducer;