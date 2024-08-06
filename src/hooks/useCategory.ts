import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import actFilterProducts from "@store/products/act/actFilterProducts";

type Filters = {
  status?: string;
  category?: string;
  priceRange?: [number, number];
  color?: string;
  size?: string;
  style?: string;
};

const useCategory = (filters: Filters) => {
  const dispatch = useAppDispatch();
  const {
    records: allProducts,
    loading,
    error,
  } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(actFilterProducts(filters));
  }, [dispatch, filters]);

  return {
    loading,
    error,
    allProducts,
  };
};

export default useCategory;
