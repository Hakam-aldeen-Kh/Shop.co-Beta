import { Rating } from "@material-tailwind/react";
import { TProduct } from "@types";
import { useNavigate, useLocation } from "react-router-dom";

interface ProductItemProps {
  product: TProduct;
  calcPrice: (price: number, discount: number) => number;
}

function Product({ product, calcPrice }: ProductItemProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const coverUrl = product.attributes.cover.data.attributes.formats.medium.url;

  const handleOnClick = () => {
    const currentPath = location.pathname;
    console.log("Current Path", currentPath);
    let newPath;

    if (currentPath.includes("/product")) {
      // Remove existing product segment before adding new one
      newPath =
        currentPath.substring(0, currentPath.lastIndexOf("/product")) +
        `/product/${product.id}`;
    } else if (currentPath.includes("shop")) {
      newPath = `${currentPath}/product/${product.id}`;
    } else {
      newPath = `shop/product/${product.id}`;
    }

    console.log("New Path", newPath);
    navigate(newPath);
  };

  return (
    <div
      key={product.id}
      className="product-item min-w-[165px] h-fit overflow-hidden group relative hover:cursor-pointer"
      onClick={handleOnClick}
    >
      <div className="h-[200px] lg:h-[300px] overflow-hidden rounded-[15px] relative">
        <div className="bg-black w-full py-2 lg:py-4 px-3 text-white text-center absolute transition-transform bottom-0 underline group-hover:translate-y-[0] flex items-center justify-center translate-y-[300px]">
          Show Details
          <i className=" text-base pl-2 fa-solid fa-up-right-from-square"></i>
        </div>
        <img
          src={coverUrl}
          alt={product.attributes.title}
          className="w-full object-cover h-full"
        />
      </div>
      <h3 className="font-semibold font-[ubuntu] pl-2 my-2">
        {product.attributes.title}
      </h3>
      <div className="flex text-sm font-semibold items-center">
        <Rating value={product.attributes.rating} readonly />
      </div>
      <p className="font-semibold text-[20px] pl-2 mt-2">
        $
        {product.attributes.discount != null
          ? Math.floor(
              calcPrice(product.attributes.price, product.attributes.discount)
            )
          : product.attributes.price}
        {product.attributes.discount && (
          <span className="inline-block mx-3">
            <span className="text-gray-500 line-through mx-1">
              ${product.attributes.price}
            </span>{" "}
            <span className="text-sm rounded-full px-2 py-1 text-red-500 bg-red-100">
              -{product.attributes.discount}%
            </span>
          </span>
        )}
      </p>
    </div>
  );
}

export default Product;
