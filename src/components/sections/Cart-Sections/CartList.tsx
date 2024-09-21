import useCart from "@hooks/useCart";
import Recycle from "@assets/svg/Recycle.svg";

function CartList() {
  const {
    cartItems,
    handleDecrement,
    handleIncrement,
    handleRemove,
    calculateRemainingStock,
  } = useCart();

  return (
    <div className="w-full h-fit md:w-[60%] border border-gray-300 rounded-[17px] py-2 px-5">
      {cartItems.map((item, index) => (
        <div key={item.product.id + item.size}>
          {" "}
          <div className="flex w-full my-3 relative">
            <img
              src={
                item.product.attributes.cover.data.attributes.formats.thumbnail
                  .url
              }
              alt={item.product.attributes.title}
              className="w-[125px] h-[135px] rounded-[15px]"
            />
            <div className="ml-3 w-full">
              <h2 className="font-bold capitalize w-[90%]">
                {item.product.attributes.title}
              </h2>
              <p className="font-semibold inline-block my-2 text-[13px] md:text-[15px]">
                Color :{" "}
              </p>
              <span className="pl-1 capitalize text-[13px] md:text-[15px]">
                {item.product.attributes.color.data.attributes.title}
              </span>
              <br />
              <p className="font-semibold inline-block mb-2 text-[13px] md:text-[15px]">
                Size :{" "}
              </p>
              <span className="pl-1 capitalize text-[13px] md:text-[15px]">
                {item.size}
              </span>
              <p className="font-semibold text-[20px]">
                ${item.product.attributes.price}
              </p>
            </div>
            <img
              src={Recycle}
              alt="Recycle"
              className="w-[20px] self-end hover:cursor-pointer absolute right-0 top-0"
              onClick={() => handleRemove(item)}
            />
            <div className="py-2 p-3 w-[120px] mt-5 text-center text-xs  text-red-500 bg-red-100  rounded-full font-semibold absolute right-0 top-9 ">
              In stock: {calculateRemainingStock(item)}
            </div>
            <div className="flex mx-auto w-full max-w-[120px]  absolute right-0 bottom-1">
              <button
                onClick={() => handleDecrement(item)}
                className="py-1 px-3 w-[40px] bg-gray-300 rounded-tl-full rounded-bl-full"
              >
                <i className="fa-solid fa-minus"></i>
              </button>
              <span className="py-1 px-3 w-[40px] bg-gray-300  flex items-center justify-center">
                {item.quantity}{" "}
              </span>
              <button
                onClick={() => handleIncrement(item)}
                className={`py-1 px-3 w-[40px] bg-gray-300  rounded-tr-full rounded-br-full ${
                  item.quantity === item.product.attributes.stock
                    ? "opacity-50"
                    : ""
                }`}
                disabled={
                  item.quantity === item.product.attributes.stock ||
                  calculateRemainingStock(item) <= 0
                }
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
          {index !== cartItems.length - 1 && (
            <hr className="bg-gray-300 h-[0.1rem] my-[15px]" />
          )}
        </div>
      ))}
    </div>
  );
}

export default CartList;
