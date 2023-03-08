import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { add, get, getAll, remove, update } from "../Api/blogApi";
import { Tblog } from "../models/blogs";


type BlogState = {
    blogs: Tblog[];
    blog: Tblog | {};
};

const initialState: BlogState = {
    blogs: [],
    blog: {},
};

export const getBlogs = createAsyncThunk("Blog/getBlogs", async () => {
    const response = await getAll();

    return response;
});

export const deleteBlog = createAsyncThunk("Blog/deleteBlog", async (id: string) => {
    const res = await remove(id);

    return res;
});

export const addBlog = createAsyncThunk("Blog/addBlog", async (Blog: any) => {
    const res = await add(Blog);

    return res;
});

export const getBlog = createAsyncThunk("Blog/getBlog", async (id: any) => {
    const res = await get(id);

    return res;
});

export const updateBlog = createAsyncThunk("Blog/updateBlog", async (Blog: any) => {
    const res = await update(Blog);

    return res;
});

const BlogSlice = createSlice({
    name: "Blog",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBlogs.fulfilled, (state, { payload }) => {
            state.blogs = payload || [];
        });

        builder.addCase(deleteBlog.fulfilled, (state, { payload }) => {
            state.blogs = state.blogs.filter((item) => item._id !== payload?._id);
        });

        builder.addCase(addBlog.fulfilled, (state, { payload }) => {
            state.blogs.push(payload as Tblog);
        });

        builder.addCase(getBlog.fulfilled, (state, { payload }) => {
            state.blog = payload as Tblog;
        });

        builder.addCase(updateBlog.fulfilled, (state, { payload }) => {
            state.blogs = state.blogs = state.blogs.map((item) => (item._id === payload?._id ? payload : item)) as Tblog[];
        });
    },
});

export default BlogSlice.reducer;