import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { isAxiosError } from "axios";
import { TProduct } from "@types";

type TResponse = TProduct[]

const actGetProduct = createAsyncThunk(
  "product/getProduct",
  async (status, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<TResponse>(
        `http://localhost:1337/api/products?populate=*&filters[status][title][$eq]=${status}`
      );
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

export default actGetProduct;
