import { useAppDispatch } from "@store/hooks";
import { useEffect, useState } from "react";
import {
  actFilterProducts,
  cleanProductsStates,
} from "@store/products/productsSlice";

const useFilter = (onClose: () => void) => {
  const dispatch = useAppDispatch();
  const [category, setCategory] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [size, setSize] = useState<string>("");
  const [style, setStyle] = useState<string>("");
  const [showCheck, setShowCheck] = useState<boolean>(true);
  const [sizeCheck, setSizeCheck] = useState<boolean>(true);

  useEffect(() => {
    return () => {
      dispatch(cleanProductsStates());
    };
  }, [dispatch]);

  const handleApplyFilters = () => {
    dispatch(
      actFilterProducts({
        category: category,
        color: color,
        minPrice: priceRange[0],
        maxPrice: priceRange[1],
        size: size,
        style: style,
      })
    );
    if (window.innerWidth <= 768) {
      onClose();
    }
  };

  const handleResetFilters = () => {
    setCategory("");
    setColor("");
    setPriceRange([0, 500]);
    setSize("");
    setStyle("");
    setShowCheck(false);
    setSizeCheck(false);
    dispatch(actFilterProducts({}));
    if (window.innerWidth <= 768) {
      onClose();
    }
  };

  const areFiltersDefault = () => {
    return (
      category === "" &&
      color === "" &&
      priceRange[0] === 0 &&
      priceRange[1] === 500 &&
      size === "" &&
      style === ""
    );
  };

  return {
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
  };
};

export default useFilter;
