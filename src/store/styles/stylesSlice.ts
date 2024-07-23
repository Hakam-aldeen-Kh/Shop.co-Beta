import { isString, TCategories, TLoading } from "@types";
import { createSlice } from "@reduxjs/toolkit";
import actGetStyles from "./act/actGetStyles";

type TStylesState = {
  records: TCategories[];
  loading: TLoading;
  error: null | string;
};

const initialState: TStylesState = {
  records: [],
  loading: "idle",
  error: null,
};

const stylesSlice = createSlice({
  name: "styles",
  initialState,
  reducers: {},
  extraReducers(builder) {
    // * Categories
    builder.addCase(actGetStyles.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetStyles.fulfilled, (state, action) => {
      state.records = action.payload.data;
      state.loading = "succeeded";
    });
    builder.addCase(actGetStyles.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export { actGetStyles };
export default stylesSlice.reducer;
