import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import productsReducer from "./products/productsSlice";
import reviewsSlice from "./reviews/reviewsSlice";
import categoriesSlice from "./categories/categoriesSlice";
import colorsSlice from "./colors/colorsSlice";
import sizesSlice from "./sizes/sizesSlice";
import stylesSlice from "./styles/stylesSlice";
import cartSlice from "./cart/cartSlice";

const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["cartItems", "totalPrice", "totalItems"],
};

const persistedCartReducer = persistReducer(cartPersistConfig, cartSlice);

const store = configureStore({
  reducer: {
    products: productsReducer,
    reviews: reviewsSlice,
    categories: categoriesSlice,
    colors: colorsSlice,
    sizes: sizesSlice,
    styles: stylesSlice,
    cart: persistedCartReducer,
  },
});

const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
