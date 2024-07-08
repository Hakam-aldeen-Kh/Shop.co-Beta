// src/store/products/productsSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import actGetProduct from "./act/actGetProducts";
import { TProduct, TLoading, isString } from "@types";

export interface IProductsState {
  records: TProduct[];
  loading: TLoading;
  error: string | null;
}

const initialState: IProductsState = {
  records: [],
  loading: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    cleanProductsRecords: (state) => {
      state.records = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProduct.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProduct.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actGetProduct.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export const { cleanProductsRecords } = productsSlice.actions;

export default productsSlice.reducer;
