import { TProduct } from "./products.types";

export type TCartItem = {
  productId: number;
  quantity: number;
  size: string;
  product: TProduct;
};

export type TCartItems = {
  cartItems: TCartItem[];
  totalItems: number;
  totalPrice: number;
};
