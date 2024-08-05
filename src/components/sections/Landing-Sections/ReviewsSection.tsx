import { Review } from "@components/index";
import LottieHandler from "@components/Feedback/Lottie/LottieHandler";
import ReviewSkeleton from "@components/Feedback/Skeleton/ReviewSkeleton/ReviewSkeleton";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { useReviews } from "@hooks/index";

function ReviewsSection() {
  const { loading, records, error, swiperRef } = useReviews();
  return (
    <section className="my-16 w-full font-ubuntu relative">
      <div className="container flex w-full justify-between">
        <h2 className="text-4xl font-bold font-cairo">OUR HAPPY CUSTOMERS</h2>
        <div className="flex items-center space-x-4 text-xl">
          <i
            className="fa-solid fa-arrow-left cursor-pointer"
            onClick={() => swiperRef.current?.slidePrev()}
          ></i>
          <i
            className="fa-solid fa-arrow-right cursor-pointer"
            onClick={() => swiperRef.current?.slideNext()}
          ></i>
        </div>
      </div>
      <div className="w-full relative my-10">
        {loading === "pending" ? (
          <div className="flex justify-center h-full overflow-hidden">
            <ReviewSkeleton />
          </div>
        ) : error ? (
          <LottieHandler type="Error" message={error} />
        ) : (
          <>
            <Swiper
              loop
              centeredSlides
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              breakpoints={{
                576: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1.8,
                },
                992: {
                  slidesPerView: 3.8,
                },
              }}
            >
              {records.map((review) => (
                <SwiperSlide
                  key={review.id}
                  className="relative flex justify-center h-full"
                >
                  <div className="max-w-[90%] md:max-w-[95%] mx-auto transition-transform duration-300 ease-in-out">
                    <Review {...review} {...review.attributes} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute top-0 bottom-0 left-0 w-1/6 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent opacity-0 md:opacity-100"></div>
            <div className="absolute top-0 bottom-0 right-0 w-1/6 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent opacity-0 md:opacity-100"></div>
          </>
        )}
      </div>
    </section>
  );
}

export default ReviewsSection;
