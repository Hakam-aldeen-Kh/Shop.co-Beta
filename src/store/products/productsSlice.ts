import { createSlice } from "@reduxjs/toolkit";
import actGetProduct from "./act/actGetProducts";
import { TProduct, TLoading, isString } from "@types";

export interface IProductsState {
  records: TProduct[];
  topSelling: TProduct[];
  newArrivals: TProduct[];
  loading: TLoading;
  error: string | null;
}

const initialState: IProductsState = {
  records: [],
  topSelling: [],
  newArrivals: [],
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
      const status = action.meta.arg.status;
      if (status === "Top Selling") {
        state.topSelling = action.payload.data;
      } else if (status === "New Arrivals") {
        state.newArrivals = action.payload.data;
      }
    });
    builder.addCase(actGetProduct.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export { actGetProduct };
export const { cleanProductsRecords } = productsSlice.actions;

export default productsSlice.reducer;
