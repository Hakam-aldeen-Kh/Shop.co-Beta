import { TCartItem } from "@types";
import useDiscountTotal from "@hooks/useDiscountTotal ";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "@store/cart/cartSlice";

const useCart = () => {
  const dispatch = useAppDispatch();
  const { cartItems, totalPrice, totalItems } = useAppSelector(
    (state) => state.cart
  );

  const handleDecrement = (item: TCartItem) => {
    dispatch(decrementQuantity(item));
  };
  const handleIncrement = (item: TCartItem) => {
    dispatch(incrementQuantity(item));
  };
  const handleRemove = (item: TCartItem) => {
    dispatch(removeItem(item));
  };
  const discountTotal = useDiscountTotal();

  const deliveryFee = totalItems * 5;

  const total = totalPrice - Math.floor(discountTotal) + deliveryFee;
  return {
    cartItems,
    total,
    totalPrice,
    discountTotal,
    deliveryFee,
    handleDecrement,
    handleIncrement,
    handleRemove,
  };
};

export default useCart;
