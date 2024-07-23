import { isString, TColors, TLoading } from "@types";
import { createSlice } from "@reduxjs/toolkit";
import actGetColors from "../colors/act/actGetColors";

type TColorsState = {
  records: TColors[];
  loading: TLoading;
  error: null | string;
};

const initialState: TColorsState = {
  records: [],
  loading: "idle",
  error: null,
};

const colorsSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(actGetColors.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetColors.fulfilled, (state, action) => {
      state.records = action.payload.data;
      state.loading = "succeeded";
    });
    builder.addCase(actGetColors.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export {  actGetColors };
export default colorsSlice.reducer;
