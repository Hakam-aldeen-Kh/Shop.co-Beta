import { createSlice } from "@reduxjs/toolkit";
import actFilterProducts from "./act/actFilterProducts";
import { TProduct, TLoading, isString } from "@types";
import actGetProducts from "./act/actGetProducts";

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
    cleanProductsStates: (state) => {
      state.loading = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    //* Filter Products
    builder.addCase(actFilterProducts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actFilterProducts.fulfilled, (state, action) => {
      state.loading = "succeeded";
      const status = action.meta.arg.status;
      if (status === "Top Selling") {
        state.topSelling = action.payload.data;
      } else if (status === "New Arrivals") {
        state.newArrivals = action.payload.data;
      } else {
        state.records = action.payload.data;
      }
    });
    builder.addCase(actFilterProducts.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
    //* All Products
    builder.addCase(actGetProducts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProducts.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload.data;
    });
    builder.addCase(actGetProducts.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export { actFilterProducts };
export const { cleanProductsStates } = productsSlice.actions;

export default productsSlice.reducer;
