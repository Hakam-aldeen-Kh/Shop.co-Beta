import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { isAxiosError } from "axios";

interface FetchProductsParams {
  status?: string;
  category?: string;
  color?: string;
  minPrice?: number;
  maxPrice?: number;
  size?: string;
  style?: string;
}

const actFilterProducts = createAsyncThunk(
  "product/filterProducts",
  async (params: FetchProductsParams = {}, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const query = new URLSearchParams();
      if (params?.status)
        query.append("filters[statuses][title][$eq]", params.status);
      if (params?.category)
        query.append("filters[category][title][$eq]", params.category);
      if (params?.color)
        query.append("filters[color][title][$eq]", params.color);
      if (params?.minPrice !== undefined)
        query.append("filters[price][$gte]", params.minPrice.toString());
      if (params?.maxPrice !== undefined)
        query.append("filters[price][$lte]", params.maxPrice.toString());
      if (params?.size)
        query.append("filters[sizes][title][$eq]", params.size.toString());
      if (params?.style)
        query.append("filters[styles][title][$eq]", params.style);
      query.append("populate", "*");
      const response = await axios.get(`products?${query.toString()}`);
      console.log(`products?${query.toString()}`);
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

export default actFilterProducts;
