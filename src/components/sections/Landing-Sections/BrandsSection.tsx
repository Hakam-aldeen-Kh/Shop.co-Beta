import zara from "@assets/svg/b2Vector.svg";
import gucci from "@assets/svg/b3Vector.svg";
import prada from "@assets/svg/b4Vector.svg";
import calvin from "@assets/svg/b5Vector.svg";
import versace from "@assets/svg/b1Vector.svg";

function BrandsSection() {
  return (
    <div className="bg-black h-[15vh] bottom-0 z-10 block py-2">
      <div className="container flex flex-wrap  gap-4 justify-between items-center md:flex-nowrap w-full h-full flex-shrink-0 ">
        <div className="md:h-full items-center grid grid-cols-3 gap-4 md:w-[60%]">
          <img src={versace} alt="Versace" className="object-contain mx-auto" />
          <img src={zara} alt="Zara" className="object-contain mx-auto" />
          <img src={gucci} alt="Gucci" className="object-contain mx-auto" />
        </div>
        <div className="md:h-full items-center grid grid-cols-2 gap-4 md:w-[40%] mx-auto">
          <img src={prada} alt="Prada" className="object-contain mx-auto" />
          <img src={calvin} alt="Calvin Klein" className="object-contain mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default BrandsSection;
