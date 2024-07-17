import Product from "@components/common/Product/Product";
import useResponsiveProducts from "@hooks/useResponsiveProducts";
import { Button } from "@material-tailwind/react";
import LottieHandler from "@components/Feedback/Lottie/LottieHandler";
import ProductSkeleton from "@components/Feedback/Skeleton/ProductSkeleton/ProductSkeleton";

function DisplayProducts({ status, title }: { status: string; title: string }) {
  const {
    displayedRecords,
    isLoading,
    hiddenButton,
    displayAll,
    calcPrice,
    records,
    loading,
    error,
  } = useResponsiveProducts(status);

  return (
    <section className="pt-[20px] bg-white w-full mt-10">
      <div className="container mb-6">
        <h2 className="text-center font-[cairo] text-[38px] w-full font-bold">
          {title}
        </h2>
      </div>
      {loading === "pending" ? (
        <div className="container flex lg:grid lg:grid-cols-4 gap-4 lg:gap-y-12 overflow-x-scroll md:overflow-auto">
          <ProductSkeleton />
        </div>
      ) : error ? (
        <LottieHandler type="Error" message={error} />
      ) : (
        <>
          {" "}
          <div className="container flex lg:grid lg:grid-cols-4 gap-4 lg:gap-y-12 overflow-x-scroll md:overflow-auto font-[ubuntu]">
            {displayedRecords.map((product) => (
              <Product
                key={product.id}
                product={product}
                calcPrice={calcPrice}
              />
            ))}
          </div>
          <div className="flex justify-center my-10">
            {records.length > 4 && (
              <Button
                variant="outlined"
                className={`${
                  hiddenButton && "hidden"
                } rounded-full px-12 outline-none capitalize`}
                loading={isLoading}
                onClick={displayAll}
              >
                View All
              </Button>
            )}
          </div>{" "}
        </>
      )}
    </section>
  );
}

export default DisplayProducts;
