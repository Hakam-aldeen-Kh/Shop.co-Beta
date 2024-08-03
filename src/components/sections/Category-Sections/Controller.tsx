import { Button } from "@material-tailwind/react";
import { TCategoryController } from "@types";

type ControllerProps = {
  categoryController: TCategoryController;
};

function Controller({ categoryController }: ControllerProps) {
  const { prev, next, start, end, allProducts, handlePageClick } =
    categoryController;
  const itemsPerPage = 9;
  const totalPages = Math.ceil(allProducts.length / itemsPerPage);
  const currentPage = Math.floor(start / itemsPerPage) + 1;

  return (
    <div className="mt-16 ml-6 flex justify-between items-center max-h-[35px] relative bottom-0 self-end">
      <Button
        variant="outlined"
        className="border-gray-500 py-2 capitalize min-w-[120px]"
        onClick={prev}
        disabled={start <= 0}
      >
        <i className="fa-solid fa-arrow-left text-black pr-3"></i>
        Previous
      </Button>
      <div className="flex space-x-2 mx-auto items-center text-gray-600 bg-none font-[ubuntu] text-sm">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`py-2 px-4 outline-none shadow-none rounded-[10px] ${
              page === currentPage ? "bg-gray-200 text-black" : ""
            }`}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <Button
        variant="outlined"
        className="border-gray-500 py-2 capitalize min-w-[120px]"
        onClick={next}
        disabled={end >= allProducts.length}
      >
        Next
        <i className="fa-solid fa-arrow-right text-black pl-3"></i>
      </Button>
    </div>
  );
}

export default Controller;
