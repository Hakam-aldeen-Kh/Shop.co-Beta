import Product from "@components/common/Product/Product";
import LottieHandler from "@components/Feedback/Lottie/LottieHandler";
import ProductSkeleton from "@components/Feedback/Skeleton/ProductSkeleton/ProductSkeleton";
import { useCalcPrice } from "@hooks/index";
import useCategory from "@hooks/useCategory";
import { useState } from "react";

function Products() {
  const [filters] = useState({});
  const { allProducts, loading, error } = useCategory(filters);

  return (
    <>
      {loading === "pending" ? (
        <div className="grid grid-cols-3 gap-6 w-[80%] pl-6">
          <ProductSkeleton number={9} />
        </div>
      ) : error ? (
        <div className="w-full h-full flex justify-center items-center">
          <LottieHandler type="Error" message={error} />
        </div>
      ) : allProducts.length == 0 ? (
        "No Products"
      ) : (
        <div className="grid grid-cols-3 gap-6 w-[80%] pl-6">
          {allProducts.map((product) => (
            <Product
              key={product.id}
              product={product}
              calcPrice={useCalcPrice}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Products;
