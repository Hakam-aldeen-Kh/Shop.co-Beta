import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetSizes } from "@store/sizes/sizesSlice";

const useSizeFilter = (
  setValue: (size: string) => void,
  setSizeCheck: (check: boolean) => void
) => {
  const dispatch = useAppDispatch();
  const { records, loading } = useAppSelector((state) => state.sizes);
  const [activeSize, setActiveSize] = useState<string | null>(null);

  useEffect(() => {
    dispatch(actGetSizes());
  }, [dispatch]);

  const handleSizeClick = (size: string) => {
    setActiveSize(size);
    setValue(size);
    setSizeCheck(true);
  };

  return {
    loading,
    records,
    activeSize,
    handleSizeClick,
  };
};

export default useSizeFilter;
