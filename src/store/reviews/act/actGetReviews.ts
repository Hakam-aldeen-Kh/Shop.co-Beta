import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { isAxiosError } from "axios";

const actGetReviews = createAsyncThunk(
  "reviews/actGetReviews",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get("reviews");
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data || error.response?.data.message || error.message
        );
      } else {
        rejectWithValue(error);
      }
    }
  }
);

export default actGetReviews;
