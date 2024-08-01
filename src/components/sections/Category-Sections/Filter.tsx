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

function Filter() {
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
  };

  return (
    <div className="w-[20%] font-[ubuntu] border border-gray-300 rounded-[15px] py-2 px-5 h-fit">
      <div className="flex items-center justify-between border-b pb-5 border-gray-300">
        <h2 className="font-bold text-[20px]">Filters</h2>
        <i className="fa-solid fa-sliders rotate-90 text-gray-500 text-[18px]"></i>
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
