import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { add, get, getAll, remove, update } from "../Api/prdAmountApi";
import { TprdAmount } from "../models/prdAmount";

type prdAmountState = {
    prdAmounts: TprdAmount[];
    prdAmount: TprdAmount | {};
};

const initialState: prdAmountState = {
    prdAmounts: [],
    prdAmount: {},
};

export const getprdAmounts = createAsyncThunk("PrdAmount/getprdAmounts", async () => {
    const response = await getAll();

    return response;
});

export const deleteprdAmount = createAsyncThunk("PrdAmount/deleteprdAmount", async (id: string) => {
    const res = await remove(id);

    return res;
});

export const addprdAmount = createAsyncThunk("PrdAmount/addprdAmount", async (prdAmount: any) => {
    const res = await add(prdAmount);

    return res;
});

export const getprdAmount = createAsyncThunk("PrdAmount/getprdAmount", async (id: any) => {
    const res = await get(id);

    return res;
});

export const updateprdAmount = createAsyncThunk("PrdAmount/updateprdAmount", async (prdAmount: any) => {
    const res = await update(prdAmount);

    return res;
});

const prdAmountSlice = createSlice({
    name: "PrdAmount",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getprdAmounts.fulfilled, (state, { payload }) => {
            state.prdAmounts = payload || [];
        });

        builder.addCase(deleteprdAmount.fulfilled, (state, { payload }) => {
            state.prdAmounts = state.prdAmounts.filter((item) => item._id !== payload?._id);
        });

        builder.addCase(addprdAmount.fulfilled, (state, { payload }) => {
            state.prdAmounts.push(payload as TprdAmount);
        });

        builder.addCase(getprdAmount.fulfilled, (state, { payload }) => {
            state.prdAmount = payload as TprdAmount;
        });

        builder.addCase(updateprdAmount.fulfilled, (state, { payload }) => {
            state.prdAmounts = state.prdAmounts = state.prdAmounts.map((item) => (item._id === payload?._id ? payload : item)) as TprdAmount[];
        });
    },
});

export default prdAmountSlice.reducer;