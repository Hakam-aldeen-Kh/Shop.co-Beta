import { isString } from "@types";
import { createSlice } from "@reduxjs/toolkit";
import actGetSizes  from "./act/actGetSizes";
import { TLoading } from "@types";
import { TSizes } from "@types";

export interface ISizesState {
  records: TSizes[];
  error: string | null;
  loading: TLoading;
}

const initialState: ISizesState = {
  records: [],
  loading: "idle",
  error: null,
};

const sizesSlice = createSlice({
  name: "sizes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetSizes.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetSizes.fulfilled, (state, action) => {
      state.records = action.payload.data;
      state.loading = "succeeded";
    });
    builder.addCase(actGetSizes.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export { actGetSizes };
export default sizesSlice.reducer;
