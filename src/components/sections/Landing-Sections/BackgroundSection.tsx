import star from "@assets/svg/Vector.svg";
import landing from "@assets/image/trendy-fashionable-couple-posing.jpg";
import { Button } from "@material-tailwind/react";

function Background() {
  return (
    <section className="relative h-auto w-full">
      <div className="flex-grow relative bg-[#f2f0f1] md:overflow-hidden overflow-visible">
        <div className="container relative block z-10">
          <h2 className="font-bold text-[40px] pt-[120px] font-[ubuntu] text-wrap lg:w-[40%] w-full mt-[30px]">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h2>
          <p className="font-[ubuntu] text-wrap lg:w-[40%] w-full text-gray-600 mt-[20px]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Button className="rounded-full mt-[30px] px-[60px] py-[15px] w-full md:w-[200px] capitalize text-[15px] bg-black">
            Shop Now
          </Button>
          {/*  //* Number Section */}
          <div className="pt-[30px] mb-[5%] md:pt-[70px] pb-[10px] grid grid-cols-1 md:grid-cols-3 justify-between w-full lg:w-[50%] gap-4 md:gap-0 font-[ubuntu] text-center md:text-start">
            <div className="border-b-2 md:border-r-2 border-gray-600 w-full px-6 pb-4 md:pb-0 md:border-b-0">
              <h3 className="font-bold text-[30px]">200+</h3>
              <p className="font-[ubuntu] text-gray-600">
                International Brands
              </p>
            </div>
            <div className="border-b-2 md:border-r-2 border-gray-600 w-full px-6 pb-4 md:pb-0 md:border-b-0">
              <h3 className="font-bold text-[30px]">2,000+</h3>
              <p className="font-[ubuntu] text-gray-600">
                High-Quality Products
              </p>
            </div>
            <div className="w-full px-6">
              <h3 className="font-bold text-[30px]">30,000+</h3>
              <p className="font-[ubuntu] text-gray-600">Happy Customers</p>
            </div>
          </div>
        </div>
        <img
          src={star}
          alt="star"
          className="absolute hidden lg:block lg:top-[200px] lg:right-[100px] w-[70px] z-10"
        />
        <img
          src={landing}
          alt="Landing"
          className="absolute hidden lg:block lg:top-[134px] lg:right-[111px] right-0 h-[663px] z-0 "
        />
        <img
          src={star}
          alt="star"
          className="absolute hidden lg:block lg:top-[350px] lg:right-[500px] w-[50px] z-10"
        />
      </div>
    </section>
  );
}

export default Background;
