import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { add, get, getAll, remove, update } from "../Api/prdColorApi";
import { TprdColor } from "../models/prdColor";

type prdColorState = {
    prdColors: TprdColor[];
    prdColor: TprdColor | {};
};

const initialState: prdColorState = {
    prdColors: [],
    prdColor: {},
};

export const getprdColors = createAsyncThunk("PrdColor/getprdColors", async () => {
    const response = await getAll();

    return response;
});

export const deleteprdColor = createAsyncThunk("PrdColor/deleteprdColor", async (id: string) => {
    const res = await remove(id);

    return res;
});

export const addprdColor = createAsyncThunk("PrdColor/addprdColor", async (prdColor: any) => {
    const res = await add(prdColor);

    return res;
});

export const getprdColor = createAsyncThunk("PrdColor/getprdColor", async (id: any) => {
    const res = await get(id);

    return res;
});

export const updateprdColor = createAsyncThunk("PrdColor/updateprdColor", async (prdColor: any) => {
    const res = await update(prdColor);

    return res;
});

const prdColorSlice = createSlice({
    name: "PrdColor",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getprdColors.fulfilled, (state, { payload }) => {
            state.prdColors = payload || [];
        });

        builder.addCase(deleteprdColor.fulfilled, (state, { payload }) => {
            state.prdColors = state.prdColors.filter((item) => item._id !== payload?._id);
        });

        builder.addCase(addprdColor.fulfilled, (state, { payload }) => {
            state.prdColors.push(payload as TprdColor);
        });

        builder.addCase(getprdColor.fulfilled, (state, { payload }) => {
            state.prdColor = payload as TprdColor;
        });

        builder.addCase(updateprdColor.fulfilled, (state, { payload }) => {
            state.prdColors = state.prdColors = state.prdColors.map((item) => (item._id === payload?._id ? payload : item)) as TprdColor[];
        });
    },
});

export default prdColorSlice.reducer;