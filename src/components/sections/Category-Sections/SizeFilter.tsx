import { useSizeFilter } from "@hooks/index";
import MainTitle from "./MainTitle";
import SizeSkeleton from "@components/Feedback/Skeleton/SizeSkeleton/SizeSkeleton";

type SizeFilterProps = {
  sizeCheck: boolean;
  setValue: (size: string) => void;
  setSizeCheck: (check: boolean) => void;
};

function SizeFilter({ sizeCheck, setValue, setSizeCheck }: SizeFilterProps) {
  const { loading, records, activeSize, handleSizeClick } = useSizeFilter(
    setValue,
    setSizeCheck
  );
  return (
    <div className="border-b py-2 border-gray-300">
      <MainTitle title="Sizes">
        {loading === "pending" ? (
          <SizeSkeleton />
        ) : (
          <div className="flex flex-wrap items-center font-[ubuntu] gap-3">
            {records.map((size) => (
              <div
                key={size.id}
                className={`py-2 px-4 rounded-full text-sm bg-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white transition-all duration-200 cursor-pointer ${
                  activeSize === size.attributes.title && sizeCheck
                    ? "bg-gray-900 text-white"
                    : null
                }`}
                onClick={() => handleSizeClick(size.attributes.title)}
              >
                {size.attributes.title}
              </div>
            ))}
          </div>
        )}
      </MainTitle>
    </div>
  );
}

export default SizeFilter;
