import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { handleAsyncActions } from "@/helpers/reduxState"

export const fetchData = createAsyncThunk(
    'data/fetchData',
    async () => {
        const response = await axios.get('/api/teams/getQuery');
        console.log("response====>", response)
        return response.data;
    });

export const postQuery = createAsyncThunk(
    "data/postData",
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await axios.post("/api/teams/addQuery", credentials);
            console.log("addQueryResponse==>", response)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data);
        }

    }
)

const initialState = {
    data: [],
    loading: false,
    error: null,
};

const querySlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        handleAsyncActions(builder, fetchData, initialState);
        handleAsyncActions(builder, postQuery, initialState);
    },
});

export default querySlice.reducer;