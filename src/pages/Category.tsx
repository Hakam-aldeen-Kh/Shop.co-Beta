import { Breadcrumbs, Filter } from "@components/sections";
import Products from "@components/sections/Category-Sections/Products";
import Controller from "@components/sections/Category-Sections/Controller";
import { useCategoryController } from "@hooks/index";

function Category() {
  const categoryController = useCategoryController();
  const { start, end, allProducts, isFilterOpen, toggleFilter } =
    categoryController;
  return (
    <>
      <Breadcrumbs title="Shop" />
      <div className="container w-full flex">
        <Filter isOpen={isFilterOpen} onClose={toggleFilter} />
        <div className=" font-[ubuntu] w-full relative">
          <div className="flex justify-between items-center md:ml-6 mb-3 font-[cairo] h-fit">
            <h1 className="text-[25px] md:text-[30px] font-bold">Shop Now</h1>
            <div className="flex items-center">
              <p className="text-gray-600 font-semibold mr-14 md:mr-0 text-[15px]">
                Showing {end > 0 ? start + 1 : 0} - {end} of{" "}
                {allProducts.length} Products
              </p>
              <button
                className="bg-[#F0F0F0] h-[32px] w-[32px] text-black rounded-full md:hidden cursor-pointer"
                onClick={toggleFilter}
              >
                <i className="fa-solid fa-sliders rotate-90 text-[18px]"></i>
              </button>
            </div>
          </div>
          <Products categoryController={categoryController} />
          <Controller categoryController={categoryController} />
        </div>
      </div>
      {isFilterOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center lg:hidden">
          <Filter isOpen={isFilterOpen} onClose={toggleFilter} />
        </div>
      )}
    </>
  );
}

export default Category;
