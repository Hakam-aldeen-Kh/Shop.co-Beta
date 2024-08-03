import { useState, useEffect } from "react";
import useCategory from "./useCategory";
import { TCategoryController } from "@types";

const useCategoryController = (): TCategoryController => {
  const [filters] = useState({});
  const { allProducts, loading, error } = useCategory(filters);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(9);

  useEffect(() => {
    if (allProducts.length < 9) {
      setEnd(allProducts.length);
    } else {
      setEnd(9);
    }
  }, [allProducts]);

  const prev = () => {
    if (start > 0) {
      const newStart = start - 9;
      setStart(newStart);
      setEnd(newStart + 9);
    }
  };

  const next = () => {
    if (end < allProducts.length) {
      const newStart = start + 9;
      const newEnd = newStart + 9;
      setStart(newStart);
      setEnd(newEnd >= allProducts.length ? allProducts.length : newEnd);
    }
  };

  const handlePageClick = (page: number) => {
    const newStart = (page - 1) * 9;
    const newEnd = newStart + 9;
    setStart(newStart);
    setEnd(newEnd >= allProducts.length ? allProducts.length : newEnd);
  };

  return {
    loading,
    error,
    allProducts,
    start,
    end,
    next,
    prev,
    handlePageClick,
  };
};

export default useCategoryController;
