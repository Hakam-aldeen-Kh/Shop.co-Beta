import { actGetCategories } from "@store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect, useState } from "react";
import Rightarrow from "@assets/svg/right-arrow.svg";
import CategoryMenuSkeleton from "@components/Feedback/Skeleton/CategoryMenuSkeleton/CategoryMenuSkeleton";
import PriceFilter from "./PriceFilter";
import ColorFilter from "./ColorFilter";
import SizeFilter from "./SizeFilter";
import StylesFilter from "./StylesFilter";
import { Button } from "@material-tailwind/react";
import { actFilterProducts } from "@store/products/productsSlice";


function Filter({ isOpen, onClose } : {isOpen : boolean, onClose : () => void}  ) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actGetCategories());
  }, [dispatch]);

  const [color, setColor] = useState<string>("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  const { loading, records } = useAppSelector((state) => state.categories);

  const handleApplyFilters = () => {
    dispatch(
      actFilterProducts({
        color: color,
        minPrice: priceRange[0],
        maxPrice: priceRange[1],
      })
    );
    onClose();
  };

  return (
    <div className={`md:w-[300px] font-[ubuntu] border border-gray-300 rounded-t-[17px] py-2 px-5 h-fit ${isOpen ? "fixed left-0 bottom-0 bg-white z-50 w-full h-full overflow-auto max-h-[80%]" : "hidden"} md:block`}>
      <div className="flex items-center justify-between border-b py-3 border-gray-300">
        <h2 className="font-bold text-[20px]">Filters</h2>
        <i className="fa-solid fa-sliders rotate-90 text-[18px] hidden md:block"></i>
        <button onClick={onClose} className="md:hidden">
          <i className="fa-solid fa-xmark text-red-600 text-2xl"></i>
        </button>
      </div>
      <div className="border-b py-5 border-gray-300">
        {loading === "pending" ? (
          <CategoryMenuSkeleton />
        ) : (
          records.map((record) => (
            <div
              key={record.id}
              className="flex items-center justify-between pb-3 last:pb-0 group cursor-pointer"
              onClick={() =>
                dispatch(
                  actFilterProducts({ category: record.attributes.title })
                )
              }
            >
              <p className="text-gray-600 text-sm group-hover:font-bold transition-all duration-300">
                {record.attributes.title}
              </p>
              <img src={Rightarrow} alt="arrow" />
            </div>
          ))
        )}
      </div>
      <PriceFilter values={priceRange} setValues={setPriceRange} />
      <ColorFilter setColor={setColor} />
      <SizeFilter />
      <StylesFilter />
      <Button
        className="font-[ubuntu] cursor-pointer rounded-full py-[10px] w-full capitalize text-[14px] bg-black"
        onClick={handleApplyFilters}
      >
        Apply Filter
      </Button>
      <Button
        className="font-[ubuntu] cursor-pointer rounded-full py-[10px] w-full capitalize text-[14px] bg-red-700 text-white mt-5"
        onClick={() => dispatch(actFilterProducts({}))}
      >
        Reset Filter
      </Button>
    </div>
  );
}

export default Filter;
