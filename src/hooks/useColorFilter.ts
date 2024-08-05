import { actGetColors } from "@store/colors/colorsSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useState, useEffect } from "react";

const useColorFilter = (
  setColor: (color: string) => void,
  setShowCheck: (show: boolean) => void
) => {
  const dispatch = useAppDispatch();
  const { records, loading } = useAppSelector((state) => state.colors);
  const [activeColor, setActiveColor] = useState<string | null>(null);

  useEffect(() => {
    dispatch(actGetColors());
  }, [dispatch]);

  const handleColorClick = (colorTitle: string) => {
    setActiveColor(colorTitle);
    setColor(colorTitle);
    setShowCheck(true);
  };

  return {
    loading,
    records,
    activeColor,
    handleColorClick,
    setActiveColor,
  };
};

export default useColorFilter;
