import { Breadcrumbs, Filter } from "@components/sections";
import Products from "@components/sections/Category-Sections/Products";
import Controller from "@components/sections/Category-Sections/Controller";
import useCategoryController from "@hooks/useCategoryController";

function Category() {
  const categoryController = useCategoryController();
  const { start, end, allProducts } = categoryController;
  return (
    <>
      <Breadcrumbs />
      <div className="container w-full flex ">
        <Filter />
        <div className=" font-[ubuntu] w-full relative">
          <div className="flex justify-between items-center ml-6 mb-3 font-[cairo] h-fit">
            <h1 className="text-[30px] font-bold">Shop Now</h1>
            <p className="text-gray-600 font-semibold">
              Showing {start + 1} - {end} of {allProducts.length} Products
            </p>
          </div>
          <Products categoryController={categoryController} />
          <Controller categoryController={categoryController} />
        </div>
      </div>
    </>
  );
}

export default Category;
