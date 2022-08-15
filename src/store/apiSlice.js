import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("fetchData", async () => {
  try {
    const response = await axios.get("https://randomuser.me/api/?results=3");
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
});

const apiSlice = createSlice({
  name: "api",
  initialState: {
    data: [],
    isLoading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [fetchData.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [fetchData.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      if (payload !== null) {
        state.data = payload;
      }
    },
    [fetchData.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = "Uupss! Something went wrong...";
    },
  },
});

export const apiActions = apiSlice.actions;
export default apiSlice;
