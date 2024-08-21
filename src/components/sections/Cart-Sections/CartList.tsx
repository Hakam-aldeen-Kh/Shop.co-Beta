import useCart from "@hooks/useCart";
import Recycle from "@assets/svg/Recycle.svg";

function CartList() {
  const { cartItems, handleDecrement, handleIncrement, handleRemove } =
    useCart();
  return (
    <div className="w-full h-fit md:w-[60%] border border-gray-300 rounded-[17px] py-2 px-5">
      {cartItems.map((item, index) => (
        <div key={item.product.id}>
          <div className="flex w-full my-3">
            <img
              src={`http://localhost:1337${item.product.attributes.cover.data.attributes.url}`}
              alt={item.product.attributes.title}
              className="w-[125px] h-[135px] rounded-[15px]"
            />
            <div className="ml-3 w-full">
              <h2 className="font-bold capitalize">
                {item.product.attributes.title}
              </h2>
              <p className="font-semibold inline-block my-2">Color : </p>
              <span className="pl-1 capitalize">
                {item.product.attributes.color.data.attributes.title}
              </span>
              <p className="pt-3 font-semibold text-[20px]">
                {item.product.attributes.price}$
              </p>
            </div>
            <div className="flex flex-col justify-between w-[30%]">
              <img
                src={Recycle}
                alt="Recycle"
                className="w-[20px] self-end hover:cursor-pointer"
                onClick={() => handleRemove(item)}
              />
              <div className="flex self-end ">
                <button
                  onClick={() => handleDecrement(item)}
                  className="py-2 px-4 bg-gray-300 rounded-tl-full rounded-bl-full"
                >
                  <i className="fa-solid fa-minus"></i>
                </button>
                <span className="py-2 px-4 bg-gray-300 flex items-center justify-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => handleIncrement(item)}
                  className="py-2 px-4 bg-gray-300 rounded-tr-full rounded-br-full"
                  disabled={item.quantity === item.product.attributes.stock}
                >
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
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
