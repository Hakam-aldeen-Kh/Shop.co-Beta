import { Button, Rating } from "@material-tailwind/react";
import { Breadcrumbs } from "@components/sections";
import Product from "@components/common/Product/Product";
import { useCalcPrice, useProductDetails } from "@hooks/index";
import ProductDetailsSkeleton from "@components/Feedback/Skeleton/ProductDetailsSkeleton/ProductDetailsSkeleton";

function ProductDetails() {
  const {
    product,
    sameProduct,
    loading,
    count,
    isStockZero,
    activeImage,
    inCart,
    activeSize,
    sizeCheck,
    decrement,
    increment,
    handleAddToCart,
    handleImageClick,
    handleChoseSize,
  } = useProductDetails();

  const calcPrice = useCalcPrice;

  if (loading === "pending" || !product) {
    return (
      <div className="container">
        <ProductDetailsSkeleton />
      </div>
    );
  }

  const {
    title,
    description,
    rating,
    price = 0,
    discount = 0,
    color,
    sizes,
    stock,
    images,
  } = product.attributes;

  // Calculate the total quantity in the cart for the current product
  const totalQuantityInCart = (inCart || 0) + count;

  // Calculate the remaining stock after considering the current count and in-cart quantity
  const remainingStock = stock - totalQuantityInCart;

  return (
    <div>
      <Breadcrumbs title="Shop" product={title} />
      {/* Product details */}
      <div className="container flex items-start flex-wrap md:justify-between">
        <div className="w-full md:max-w-[50%] flex flex-wrap lg:flex-nowrap flex-row-reverse">
          <img
            src={activeImage as string}
            alt={title}
            className="w-full lg:w-[70%] rounded-[15px]"
          />
          <div className="lg:mr-5 w-full lg:w-[30%] h-full flex items-center justify-between mt-3 lg:mt-0 lg:flex-col">
            {images.data.map((image) => (
              <img
                key={image.id}
                src={image.attributes.formats.thumbnail.url}
                alt={title}
                className={`w-[30%] lg:w-[200px] max-h-[150px] rounded-[15px] lg:mt-4 lg:first-of-type:mt-0 cursor-pointer ${
                  activeImage === image.attributes.formats.thumbnail.url
                    ? "border-2 border-black"
                    : ""
                }`}
                onClick={() =>
                  handleImageClick(image.attributes.formats.thumbnail.url)
                }
              />
            ))}
          </div>
        </div>
        <div className="mt-3 md:pl-8 md:mt-0 w-full md:max-w-[50%] font-[ubuntu]">
          <h1 className="font-[ubuntu] text-[30px] font-bold">{title}</h1>
          <div className="flex text-sm font-semibold items-center my-4">
            <Rating value={rating} readonly />
            <span className="mx-2">{rating} / 5 </span>
          </div>
          <div className="font-bold text-[28px] pl-2 mb-4 flex gap-x-2">
            <p>
              $
              {discount != null
                ? Math.floor(calcPrice(price, discount))
                : price}
            </p>
            {discount && (
              <div className="flex gap-x-2 items-center">
                <span className="text-gray-500 line-through mx-1">
                  ${price}
                </span>{" "}
                <span className="text-sm rounded-full px-2 py-1 text-red-500 bg-red-100">
                  -{discount}%
                </span>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between w-[50%]">
            <div
              className={`text-base inline-block pl-2 ${
                remainingStock === 0 ? "text-red-900" : "text-black"
              } ${
                isStockZero
                  ? "transform scale-125 transition-transform duration-300"
                  : ""
              }`}
            >
              <i className="fa-solid fa-box-archive"></i> {remainingStock}
            </div>
            <div className="flex items-center">
              <div
                className="w-4 h-4 rounded-full border-2 border-gray-300 text-lg "
                style={{ backgroundColor: color.data.attributes.degree }}
              ></div>
              <span className={`text-base inline-block pl-2 capitalize`}>
                {color.data.attributes.title}
              </span>
            </div>
          </div>
          <p className="text-wrap text-[15px] text-gray-600 font-bold mt-4">
            {description}
          </p>
          <hr className="bg-gray-500 h-[0.1rem] my-[15px]" />
          <p className="text-wrap text-[15px] text-gray-600 font-bold mt-4">
            Choose Size
          </p>
          <div className="flex items-center mt-3">
            {sizes.data.map((size) => (
              <div
                key={size.id}
                className={`py-2 px-4 rounded-full text-nowrap text-[13px] bg-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white transition-all duration-200 cursor-pointer w-fit ml-2 first:ml-0 ${
                  activeSize === size.attributes.title && sizeCheck
                    ? "bg-gray-900 text-white"
                    : null
                }`}
                onClick={() => handleChoseSize(size.attributes.title)}
              >
                {size.attributes.title}
              </div>
            ))}
          </div>
          <hr className="bg-gray-500 h-[0.1rem] my-[15px]" />
          <div className="flex justify-between items-center">
            <div className="w-[35%] flex">
              <button
                onClick={decrement}
                className={`py-2 px-4 bg-gray-300 rounded-tl-full rounded-bl-full ${
                  count === 0 ? "opacity-50" : ""
                }`}
                disabled={count === 0}
              >
                <i className="fa-solid fa-minus"></i>
              </button>
              <span className="py-2 px-4 bg-gray-300 flex items-center justify-center">
                {count}
              </span>
              <button
                onClick={increment}
                className={`py-2 px-4 bg-gray-300 rounded-tr-full rounded-br-full ${
                  remainingStock === 0 ? "opacity-50" : ""
                }`}
                disabled={remainingStock === 0}
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
            <Button
              onClick={handleAddToCart}
              className="ml-3 bg-black text-white py-4 rounded-full w-[55%]"
              disabled={count <= 0 || sizeCheck === false}
            >
              <i className="fa-solid fa-cart-plus mr-3"></i>
              Add To Cart
            </Button>
          </div>
          <hr className="bg-gray-500 h-[0.1rem] my-[15px]" />
        </div>
      </div>
      {/* you might also like */}
      <div className="container w-full mt-[60px]">
        <h2 className="font-[cairo] text-center font-bold text-[35px]">
          You might also like
        </h2>
        <div className="mt-[30px] flex lg:grid lg:grid-cols-4 gap-4 lg:gap-y-12 overflow-x-scroll md:overflow-auto">
          {sameProduct.map((product) => (
            <Product
              key={product.id}
              product={product}
              calcPrice={useCalcPrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
