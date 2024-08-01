import { useEffect, useState } from "react";
import MainTitle from "./MainTitle";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetColors } from "@store/colors/colorsSlice";
import ColorSkeleton from "@components/Feedback/Skeleton/ColorSkeleton/ColorSkeleton";

// Define the type for the props
interface ColorFilterProps {
  setColor: (color: string) => void;
}

function ColorFilter({ setColor }: ColorFilterProps) {
  const dispatch = useAppDispatch();
  const { records, loading } = useAppSelector((state) => state.colors);

  const [activeColor, setActiveColor] = useState<string | null>(null);

  useEffect(() => {
    dispatch(actGetColors());
  }, [dispatch]);

  const handleColorClick = (colorTitle: string) => {
    setActiveColor(colorTitle);
    setColor(colorTitle);
  };

  return (
    <div className="border-b py-2 border-gray-300">
      <MainTitle title="Colors">
        {loading === "pending" ? (
          <ColorSkeleton />
        ) : (
          <div className="grid grid-cols-5 gap-2">
            {records.map((color) => (
              <div
                key={color.id}
                style={{ backgroundColor: color.attributes.degree }}
                className="cursor-pointer w-8 h-8 group rounded-full mx-auto border border-gray-300 flex items-center justify-center"
                onClick={() => handleColorClick(color.attributes.title)}
              >
                <i
                  className={`fa-solid fa-check ${
                    color.attributes.title === "white"
                      ? "text-black"
                      : "text-white"
                  } ${
                    activeColor === color.attributes.title ? "block" : "hidden"
                  }`}
                ></i>
              </div>
            ))}
          </div>
        )}
      </MainTitle>
    </div>
  );
}

export default ColorFilter;
