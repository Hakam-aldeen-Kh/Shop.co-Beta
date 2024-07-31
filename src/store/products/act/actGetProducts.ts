import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

const actGetProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get("products?populate=*");
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data || error.response?.data.message || error.message
        );
      } else {
        return rejectWithValue(error);
      }
    }
  }
);

export default actGetProducts;
