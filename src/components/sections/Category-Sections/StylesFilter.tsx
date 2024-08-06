import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetStyles } from "@store/styles/stylesSlice";
import Rightarrow from "@assets/svg/right-arrow.svg";
import CategoryMenuSkeleton from "@components/Feedback/Skeleton/CategoryMenuSkeleton/CategoryMenuSkeleton";
import MainTitle from "./MainTitle";
import { actFilterProducts } from "@store/products/productsSlice";

type StylesFilterProps = {
  setStyle: (style: string) => void;
  onClose: () => void;
};

function StylesFilter({ setStyle, onClose }: StylesFilterProps) {
  const dispatch = useAppDispatch();
  const { records, loading } = useAppSelector((state) => state.styles);

  useEffect(() => {
    dispatch(actGetStyles());
  }, [dispatch]);

  return (
    <div className="py-2 mb-3">
      <MainTitle title="Dress Style">
        <div className="border-gray-300">
          {loading === "pending" ? (
            <CategoryMenuSkeleton />
          ) : (
            records.map((record) => (
              <div
                key={record.id}
                className="flex items-center justify-between pb-3 last:pb-0 group cursor-pointer"
                onClick={() => {
                  setStyle(record.attributes.title);
                  if (window.innerWidth <= 768) {
                    onClose();
                  }
                  dispatch(
                    actFilterProducts({ style: record.attributes.title })
                  );
                }}
              >
                <p className="text-gray-600 text-sm group-hover:font-bold transition-all duration-300">
                  {record.attributes.title}
                </p>
                <img src={Rightarrow} alt="arrow" />
              </div>
            ))
          )}
        </div>
      </MainTitle>
    </div>
  );
}

export default StylesFilter;
