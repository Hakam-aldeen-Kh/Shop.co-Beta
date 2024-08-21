import { Breadcrumbs, CartList, OrderSummary } from "@components/sections";

function Cart() {
  return (
    <div>
      <Breadcrumbs title="Cart" />
      <div className="container">
        <h1 className="text-[25px] md:text-[30px] font-bold mb-3 font-[ubuntu]">
          Your Cart
        </h1>
        <div className=" flex flex-wrap md:flex-nowrap gap-y-3 md:gap-y-0 md:gap-x-3 w-full font-[ubuntu]">
          <CartList />
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}

export default Cart;
