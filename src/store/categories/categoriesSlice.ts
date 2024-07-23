import { isString, TCategories, TLoading } from "@types";
import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCategories";

type TCategoriesState = {
  records: TCategories[];
  loading: TLoading;
  error: null | string;
};

const initialState: TCategoriesState = {
  records: [],
  loading: "idle",
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers(builder) {
    // * Categories
    builder.addCase(actGetCategories.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetCategories.fulfilled, (state, action) => {
      state.records = action.payload.data;
      state.loading = "succeeded";
    });
    builder.addCase(actGetCategories.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export { actGetCategories };
export default categoriesSlice.reducer;
