import { createSlice } from "@reduxjs/toolkit";
import { TProduct, TLoading, isString } from "@types";
import actGetProducts from "./act/actGetProducts";
import actFilterProducts from "./act/actFilterProducts";
import { RootState } from "@store/index";

export interface IProductsState {
  records: TProduct[];
  topSelling: TProduct[];
  newArrivals: TProduct[];
  sameProduct: TProduct[];
  loading: TLoading;
  error: string | null;
}

const initialState: IProductsState = {
  records: [],
  topSelling: [],
  newArrivals: [],
  sameProduct: [],
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
      state.sameProduct = [];
      state.records = [];
    },
  },
  extraReducers: (builder) => {
    //* Filter Products
    builder
      .addCase(actFilterProducts.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(actFilterProducts.fulfilled, (state, action) => {
        state.loading = "succeeded";
        const status = action.meta.arg.status;
        const category = action.meta.arg.category;
        if (status === "Top Selling") {
          state.topSelling = action.payload.data;
        } else if (status === "New Arrivals") {
          state.newArrivals = action.payload.data;
        } else {
          state.records = action.payload.data;
        }
        if (category) {
          state.sameProduct = action.payload.data;
        }
      })
      .addCase(actFilterProducts.rejected, (state, action) => {
        state.loading = "failed";
        if (isString(action.payload)) {
          state.error = action.payload;
        }
      })
      //* All Products
      .addCase(actGetProducts.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(actGetProducts.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.records = action.payload.data;
      })
      .addCase(actGetProducts.rejected, (state, action) => {
        state.loading = "failed";
        if (isString(action.payload)) {
          state.error = action.payload;
        }
      });
  },
});

export const selectProductById = (state: RootState, productId: number) =>
  state.products.records.find((product: TProduct) => product.id === productId);

export { actFilterProducts };
export const { cleanProductsStates } = productsSlice.actions;

export default productsSlice.reducer;
