import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productsSlice";
import reviewsSlice from "./reviews/reviewsSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    reviews: reviewsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export { store };
