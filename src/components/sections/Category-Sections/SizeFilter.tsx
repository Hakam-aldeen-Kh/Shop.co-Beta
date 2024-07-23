import { useEffect } from "react";
import MainTitle from "./MainTitle";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetSizes } from "@store/sizes/sizesSlice";
import SizeSkeleton from "@components/Feedback/Skeleton/SizeSkeleton/SizeSkeleton";

function SizeFilter() {
  const dispatch = useAppDispatch();
  const { records, loading } = useAppSelector((state) => state.sizes);
  
  useEffect(() => {
    dispatch(actGetSizes());
  }, [dispatch]);

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
                className="py-2 px-4 rounded-full text-sm bg-gray-300 text-gray-700 hover:bg-black hover:text-white transition-all duration-200 cursor-pointer"
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
