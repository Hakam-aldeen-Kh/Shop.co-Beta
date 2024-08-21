import { useMemo } from "react";
import { useAppSelector } from "@store/hooks";
import useCalcPrice from "@hooks/useCalcPrice";

const useDiscountTotal = () => {
  const { cartItems } = useAppSelector((state) => state.cart);
  const calcPrice = useCalcPrice;

  const discountTotal = useMemo(() => {
    return cartItems.reduce((total, item) => {
      const { price, discount } = item.product.attributes;
      if (discount) {
        total += (price - calcPrice(price, discount)) * item.quantity;
      }
      return total;
    }, 0);
  }, [cartItems, calcPrice]);

  return discountTotal;
};

export default useDiscountTotal;
