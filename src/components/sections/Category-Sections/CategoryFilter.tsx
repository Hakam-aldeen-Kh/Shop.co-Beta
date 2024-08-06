import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import Rightarrow from "@assets/svg/right-arrow.svg";
import { actFilterProducts } from "@store/products/productsSlice";
import { actGetCategories } from "@store/categories/categoriesSlice";
import CategoryMenuSkeleton from "@components/Feedback/Skeleton/CategoryMenuSkeleton/CategoryMenuSkeleton";

type CategoryFilterProps = {
  setCategory: (category: string) => void;
  onClose: () => void;
};

function CategoryFilter({ setCategory, onClose }: CategoryFilterProps) {
  const dispatch = useAppDispatch();
  const { loading, records } = useAppSelector((state) => state.categories);

  useEffect(() => {
    dispatch(actGetCategories());
  }, [dispatch]);

  return (
    <div className="border-b py-5 border-gray-300">
      {loading === "pending" ? (
        <CategoryMenuSkeleton />
      ) : (
        records.map((record) => (
          <div
            key={record.id}
            className="flex items-center justify-between pb-3 last:pb-0 group cursor-pointer"
            onClick={() => {
              setCategory(record.attributes.title);
              if (window.innerWidth <= 768) {
                onClose();
              }
              dispatch(
                actFilterProducts({ category: record.attributes.title })
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
  );
}

export default CategoryFilter;
