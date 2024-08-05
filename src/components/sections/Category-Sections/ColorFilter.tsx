import MainTitle from "./MainTitle";
import ColorSkeleton from "@components/Feedback/Skeleton/ColorSkeleton/ColorSkeleton";
import useColorFilter from "@hooks/useColorFilter";

type ColorFilterProps = {
  showCheck: boolean;
  setColor: (color: string) => void;
  setShowCheck: (check: boolean) => void;
};

function ColorFilter({ setColor, showCheck, setShowCheck }: ColorFilterProps) {
  const { loading, records, handleColorClick, activeColor } = useColorFilter(
    setColor,
    setShowCheck
  );

  return (
    <div className="border-b py-2 border-gray-300">
      <MainTitle title="Colors">
        {loading === "pending" ? (
          <ColorSkeleton />
        ) : (
          <div className="flex flex-wrap gap-3">
            {records.map((color) => (
              <div
                key={color.id}
                style={{ backgroundColor: color.attributes.degree }}
                className="cursor-pointer w-8 h-8 group rounded-full border border-gray-300 flex items-center justify-center"
                onClick={() => handleColorClick(color.attributes.title)}
              >
                <i
                  className={`fa-solid fa-check ${
                    color.attributes.title === "white"
                      ? "text-black"
                      : "text-white"
                  } ${
                    activeColor === color.attributes.title && showCheck
                      ? "block"
                      : "hidden"
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
