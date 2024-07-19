import { isString } from "@types";
import { createSlice } from "@reduxjs/toolkit";
import actGetReviews from "./act/actGetReviews";
import { TLoading } from "@types";
import { TReview } from "@types";

export interface IReviewsState {
  records: TReview[];
  error: string | null;
  loading: TLoading;
}

const initialState: IReviewsState = {
  records: [],
  loading: "idle",
  error: null,
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetReviews.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetReviews.fulfilled, (state, action) => {
      state.records = action.payload.data;
      state.loading = "succeeded";
    });
    builder.addCase(actGetReviews.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export { actGetReviews };
export default reviewsSlice.reducer;
