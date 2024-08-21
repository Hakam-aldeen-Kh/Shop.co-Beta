import useCart from "@hooks/useCart";

function OrderSummary() {
  const { totalPrice, discountTotal, deliveryFee, total } = useCart();
  return (
    <div className="w-full h-fit md:w-[40%] border border-gray-300 rounded-[17px] py-2 px-5">
      <h2 className="font-semibold text-[20px]">Order Summary</h2>
      <div className="my-3 font-semibold">
        <div className="flex items-center justify-between mb-2">
          <p className="text-gray-600 inline-block">Subtotal</p>
          <span>${totalPrice}</span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-gray-600 inline-block">Discount</p>
          <span className="text-red-500">-${Math.floor(discountTotal)}</span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-gray-600 inline-block">Delivery Fee</p>
          <span>${deliveryFee}</span>
        </div>
      </div>
      <hr className="bg-gray-300 h-[0.1rem] my-[15px]" />
      <div className="flex items-center justify-between mb-2 font-semibold">
        <p className="inline-block">Total</p>
        <span className="text-[20px]">${total}</span>
      </div>
    </div>
  );
}

export default OrderSummary;
