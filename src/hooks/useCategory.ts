import { useAppDispatch, useAppSelector } from "@store/hooks";
import actGetProducts from "@store/products/act/actGetProducts";
import { TProduct } from "@types";
import { useEffect } from "react";

const useCategory = () =>{
  const dispatch = useAppDispatch();
  const allProducts = useAppSelector((state) => state.products.records) as Array<TProduct>;

  useEffect(() => {
    dispatch(actGetProducts());
  });

  return {
    dispatch,
    allProducts
  }
}

export default useCategory