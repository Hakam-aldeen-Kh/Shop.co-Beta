import landing from "@assets/image/trendy-fashionable-couple-posing.jpg";
import versace from "@assets/svg/b1Vector.svg";
import zara from "@assets/svg/b2Vector.svg";
import gucci from "@assets/svg/b3Vector.svg";
import prada from "@assets/svg/b4Vector.svg";
import calvin from "@assets/svg/b5Vector.svg";
import { Button } from "@material-tailwind/react";

function Landing() {
  return (
    <section className="relative h-screen w-full flex flex-col">
      {/* //* background */}
      <div className="flex-grow relative bg-[#f2f0f1]">
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
        </div>
        <img
          src={landing}
          alt="Landing"
          className="absolute hidden lg:block lg:top-[134px] lg:right-[111px] right-0 h-[663px] z-0 "
        />
      </div>
      {/* //* Brand Section */}
      <div className="bg-black h-[15vh] z-10 ">
        <div className="container flex flex-wrap justify-between md:flex-nowrap w-full h-full flex-shrink-0 ">
          <div className="md:h-full items-center grid grid-cols-3 gap-4 md:w-[60%]">
            <img src={versace} alt="Versace" className="object-contain" />
            <img src={zara} alt="Zara" className="object-contain mx-auto" />
            <img src={gucci} alt="Gucci" className="object-contain" />
          </div>
          <div className="md:h-full items-center grid grid-cols-2 gap-4 md:w-[40%]">
            <img src={prada} alt="Prada" className="object-contain" />
            <img src={calvin} alt="Calvin Klein" className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
