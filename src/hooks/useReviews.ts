import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetReviews } from "@store/reviews/reviewsSlice";
import { useEffect, useRef } from "react";
import { Swiper as SwiperType } from "swiper";

const useReviews = () => {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.reviews);
  // Using a ref to manage the Swiper instance
  const swiperRef = useRef<SwiperType | null>(null);
  useEffect(() => {
    dispatch(actGetReviews());
  }, [dispatch]);

  return { loading, error, records, swiperRef };
};

export default useReviews;
