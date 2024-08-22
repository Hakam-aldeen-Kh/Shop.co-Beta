import { createSlice } from "@reduxjs/toolkit";
import { TCartItems } from "@types";

const initialState: TCartItems = {
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) =>
          item.productId === newItem.productId && item.size === newItem.size
      );

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.cartItems.push(newItem);
      }

      const { price } = newItem.product.attributes;
      state.totalItems += newItem.quantity;
      state.totalPrice += price * newItem.quantity;
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) =>
          item.productId === action.payload.productId &&
          item.size === action.payload.size
      );

      if (item && item.quantity < item.product.attributes.stock) {
        item.quantity++;
        state.totalItems++;
        const { price } = item.product.attributes;
        state.totalPrice += price;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) =>
          item.productId === action.payload.productId &&
          item.size === action.payload.size
      );

      if (item) {
        const { price } = item.product.attributes;
        const itemPrice = price;

        if (item.quantity === 1) {
          state.cartItems = state.cartItems.filter(
            (item) =>
              item.productId !== action.payload.productId ||
              item.size !== action.payload.size
          );
          state.totalItems -= item.quantity;
          state.totalPrice -= itemPrice * item.quantity;
        } else {
          item.quantity--;
          state.totalItems--;
          state.totalPrice -= itemPrice;
        }
      }
    },
    removeItem: (state, action) => {
      const removedItem = state.cartItems.find(
        (item) =>
          item.productId === action.payload.productId &&
          item.size === action.payload.size
      );

      if (removedItem) {
        state.totalItems -= removedItem.quantity;
        const { price } = removedItem.product.attributes;
        const itemPrice = price;
        state.totalPrice -= itemPrice * removedItem.quantity;
      }

      state.cartItems = state.cartItems.filter(
        (item) =>
          item.productId !== action.payload.productId ||
          item.size !== action.payload.size
      );
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;
