import { useState, useEffect, useCallback } from "react";
import useCategory from "./useCategory";
import { TCategoryController } from "@types";

const useCategoryController = (): TCategoryController => {
  const [filters] = useState({});
  const { allProducts, loading, error } = useCategory(filters);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(9);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  const updateItemsPerPage = useCallback(() => {
    let newItemsPerPage;
    if (window.innerWidth >= 1024) {
      newItemsPerPage = 9;
    } else if (window.innerWidth >= 768) {
      newItemsPerPage = 8;
    } else {
      newItemsPerPage = 6;
    }
    setItemsPerPage(newItemsPerPage);
  }, []);

  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, [updateItemsPerPage]);

  useEffect(() => {
    const newEnd = start + itemsPerPage;
    setEnd(newEnd >= allProducts.length ? allProducts.length : newEnd);
  }, [start, itemsPerPage, allProducts.length]);

  const prev = () => {
    if (start > 0) {
      const newStart = start - itemsPerPage;
      setStart(newStart < 0 ? 0 : newStart);
    }
  };

  const next = () => {
    if (end < allProducts.length) {
      const newStart = start + itemsPerPage;
      setStart(newStart);
    }
  };

  const handlePageClick = (page: number) => {
    const newStart = (page - 1) * itemsPerPage;
    const newEnd = newStart + itemsPerPage;
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
    itemsPerPage, // add itemsPerPage to the returned object
  };
};

export default useCategoryController;