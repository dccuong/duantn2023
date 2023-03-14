import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { add, get, getAll, remove, update } from "../Api/prdCateApi";
import { TPrdCate } from "../models/prdCates";



type prdCateState = {
    prdCates: TPrdCate[];
    PrdCate: TPrdCate | {};
};

const initialState: prdCateState = {
    prdCates: [],
    PrdCate: {},
};

export const getprdCates = createAsyncThunk("PrdCate/getprdCates", async () => {
    const response = await getAll();

    return response;
});

export const deletePrdCate = createAsyncThunk("PrdCate/deletePrdCate", async (id: string) => {
    const res = await remove(id);

    return res;
});

export const addPrdCate = createAsyncThunk("PrdCate/addPrdCate", async (Blog: any) => {
    const res = await add(Blog);

    return res;
});

export const getPrdCate = createAsyncThunk("PrdCate/getPrdCate", async (id: any) => {
    const res = await get(id);

    return res;
});

export const updatePrdCate = createAsyncThunk("PrdCate/updatePrdCate", async (Blog: any) => {
    const res = await update(Blog);

    return res;
});

const BlogSlice = createSlice({
    name: "Blog",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getprdCates.fulfilled, (state, { payload }) => {
            state.prdCates = payload || [];
        });

        builder.addCase(deletePrdCate.fulfilled, (state, { payload }) => {
            state.prdCates = state.prdCates.filter((item) => item._id !== payload?._id);
        });

        builder.addCase(addPrdCate.fulfilled, (state, { payload }) => {
            state.prdCates.push(payload as TPrdCate);
        });

        builder.addCase(getPrdCate.fulfilled, (state, { payload }) => {
            state.PrdCate = payload as TPrdCate;
        });

        builder.addCase(updatePrdCate.fulfilled, (state, { payload }) => {
            state.prdCates = state.prdCates = state.prdCates.map((item) => (item._id === payload?._id ? payload : item)) as TPrdCate[];
        });
    },
});

export default BlogSlice.reducer;