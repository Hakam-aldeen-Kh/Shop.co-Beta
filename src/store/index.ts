import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productsSlice";
import reviewsSlice from "./reviews/reviewsSlice";
import categoriesSlice from "./categories/categoriesSlice";
import colorsSlice from "./colors/colorsSlice";
import sizesSlice from "./sizes/sizesSlice";
import stylesSlice from "./styles/stylesSlice";
import cartSlice from "./cart/cartSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    reviews: reviewsSlice,
    categories: categoriesSlice,
    colors: colorsSlice,
    sizes: sizesSlice,
    styles: stylesSlice,
    cart: cartSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export { store };
