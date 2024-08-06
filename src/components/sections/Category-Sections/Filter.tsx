import PriceFilter from "./PriceFilter";
import ColorFilter from "./ColorFilter";
import SizeFilter from "./SizeFilter";
import { Button } from "@material-tailwind/react";
import CategoryFilter from "./CategoryFilter";
import StylesFilter from "./StylesFilter";
import useFilter from "@hooks/useFilter";

type FilterProps = { isOpen: boolean; onClose: () => void };

function Filter({ isOpen, onClose }: FilterProps) {
  const {
    setCategory,
    priceRange,
    setPriceRange,
    setColor,
    showCheck,
    setShowCheck,
    sizeCheck,
    setSize,
    setSizeCheck,
    setStyle,
    handleApplyFilters,
    areFiltersDefault,
    handleResetFilters,
  } = useFilter(onClose);

  return (
    <div
      className={`md:w-[300px] font-[ubuntu] border border-gray-300 rounded-t-[17px] md:rounded-[17px] py-2 px-5 h-fit ${
        isOpen
          ? "fixed left-0 bottom-0 bg-white z-50 w-full h-full overflow-auto max-h-[80%]"
          : "hidden"
      } md:block`}
    >
      <div className="flex items-center justify-between border-b py-3 border-gray-300">
        <h2 className="font-bold text-[20px]">Filters</h2>
        <i className="fa-solid fa-sliders rotate-90 text-[18px] hidden md:block"></i>
        <button onClick={onClose} className="md:hidden">
          <i className="fa-solid fa-xmark text-red-600 text-2xl"></i>
        </button>
      </div>
      <CategoryFilter setCategory={setCategory} onClose={onClose} />
      <PriceFilter values={priceRange} setValues={setPriceRange} />
      <ColorFilter
        setColor={setColor}
        showCheck={showCheck}
        setShowCheck={setShowCheck}
      />
      <SizeFilter
        setValue={setSize}
        sizeCheck={sizeCheck}
        setSizeCheck={setSizeCheck}
      />
      <StylesFilter setStyle={setStyle} onClose={onClose} />
      <Button
        className="font-[ubuntu] cursor-pointer rounded-full py-[10px] w-full capitalize text-[14px] bg-black"
        onClick={handleApplyFilters}
        disabled={areFiltersDefault()} // Disable button if filters are in default state
      >
        Apply Filter
      </Button>
      <Button
        className="font-[ubuntu] cursor-pointer rounded-full py-[10px] w-full capitalize text-[14px] bg-red-700 text-white mt-5"
        onClick={handleResetFilters}
        disabled={areFiltersDefault()} // Disable button if filters are in default state
      >
        Reset Filter
      </Button>
    </div>
  );
}

export default Filter;
