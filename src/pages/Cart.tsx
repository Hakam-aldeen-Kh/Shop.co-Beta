import LottieHandler from "@components/Feedback/Lottie/LottieHandler";
import { Breadcrumbs, CartList, OrderSummary } from "@components/sections";
import { useAppSelector } from "@store/hooks";

function Cart() {
  const cartItem = useAppSelector((state) => state.cart.cartItems);
  return (
    <div>
      <Breadcrumbs title="Cart" />
      <div className="container">
        <h1 className="text-[25px] md:text-[30px] font-bold mb-3 font-[ubuntu]">
          Your Cart
        </h1>
        {cartItem.length > 0 ? (
          <div className=" flex flex-wrap md:flex-nowrap gap-y-3 md:gap-y-0 md:gap-x-3 w-full font-[ubuntu]">
            <CartList />
            <OrderSummary />
          </div>
        ) : (
          <LottieHandler
            type="Empty"
            message="Your cart is currently empty. Start shopping to add items to your cart!"
          />
        )}
      </div>
    </div>
  );
}

export default Cart;
