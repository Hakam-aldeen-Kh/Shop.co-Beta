import Product from "@components/common/Product/Product";
import LottieHandler from "@components/Feedback/Lottie/LottieHandler";
import ProductSkeleton from "@components/Feedback/Skeleton/ProductSkeleton/ProductSkeleton";
import { useCalcPrice } from "@hooks/index";
import { TCategoryController, TProduct } from "@types";

type ProductsProps = {
  categoryController: TCategoryController;
};

function Products({ categoryController }: ProductsProps) {
  const { loading, error, allProducts, start, end } = categoryController;
  return (
    <>
      {loading === "pending" ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-6 w-full md:pl-6">
          <ProductSkeleton number={end - start} />
        </div>
      ) : error ? (
        <div className="w-full h-full flex justify-center items-center">
          <LottieHandler type="Error" message={error} />
        </div>
      ) : allProducts.length === 0 ? (
        "No Products"
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-6 w-full md:pl-6 top-0">
          {allProducts.slice(start, end).map((product: TProduct) => (
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
