import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { add, get, getAll, remove, update } from "../Api/sliderApi";
import { TSlider } from "../models/slider";


type SliderState = {
    sliders: TSlider[];
    slider: TSlider | {};
};

const initialState: SliderState = {
    sliders: [],
    slider: {},
};

export const getSliders = createAsyncThunk("Slider/getSliders", async () => {
    const response = await getAll();

    return response;
});

export const deleteSlider = createAsyncThunk("Slider/deleteSlider", async (id: string) => {
    const res = await remove(id);

    return res;
});

export const addSlider = createAsyncThunk("Slider/addSlider", async (Slider: any) => {
    const res = await add(Slider);

    return res;
});

export const getSlider = createAsyncThunk("Slider/getSlider", async (id: any) => {
    const res = await get(id);

    return res;
});

export const updateSlider = createAsyncThunk("Slider/updateSlider", async (Slider: any) => {
    const res = await update(Slider);

    return res;
});

const SliderSlice = createSlice({
    name: "Slider",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSliders.fulfilled, (state, { payload }) => {
            state.sliders = payload || [];
        });

        builder.addCase(deleteSlider.fulfilled, (state, { payload }) => {
            state.sliders = state.sliders.filter((item) => item._id !== payload?._id);
        });

        builder.addCase(addSlider.fulfilled, (state, { payload }) => {
            state.sliders.push(payload as TSlider);
        });

        builder.addCase(getSlider.fulfilled, (state, { payload }) => {
            state.slider = payload as TSlider;
        });

        builder.addCase(updateSlider.fulfilled, (state, { payload }) => {
            state.sliders = state.sliders = state.sliders.map((item) => (item._id === payload?._id ? payload : item)) as TSlider[];
        });
    },
});

export default SliderSlice.reducer;