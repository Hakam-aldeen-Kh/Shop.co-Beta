import { useState, useEffect } from "react";
import { TProduct } from "@types";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetProduct } from "@store/products/productsSlice";

const useResponsiveProducts = (status: string) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [hiddenButton, setHiddenButton] = useState(false);
  const [displayedRecords, setDisplayedRecords] = useState<TProduct[]>([]);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  const records = useAppSelector((state) => {
    if (status === "Top Selling") {
      return state.products.topSelling;
    } else if (status === "New Arrivals") {
      return state.products.newArrivals;
    }
    return [];
  });

  const { error, loading } = useAppSelector((state) => state.products);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 992);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    dispatch(actGetProduct({ status }));
  }, [dispatch, status]);

  useEffect(() => {
    if (isLargeScreen) {
      setDisplayedRecords(records.slice(0, 4));
      setHiddenButton(false);
    } else {
      setDisplayedRecords(records);
      setHiddenButton(true);
    }
  }, [records, isLargeScreen]);

  const displayAll = () => {
    setIsLoading(true);
    setTimeout(() => {
      setDisplayedRecords(records);
      setHiddenButton(true);
      setIsLoading(false);
    }, 2000);
  };

  const calcPrice = (price: number, discount: number) => {
    const finalPrice = price - (discount * price) / 100;
    return finalPrice;
  };

  return {
    displayedRecords,
    isLoading,
    hiddenButton,
    displayAll,
    calcPrice,
    records,
    error,
    loading,
  };
};

export default useResponsiveProducts;
