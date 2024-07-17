import casual from "@assets/image/casual.jpg";
import formal from "@assets/image/formal.jpg";
import gym from "@assets/image/gym.jpg";
import party from "@assets/image/party.jpg";

function StylesSections() {
  return (
    <div className="container rounded-[20px] bg-[#f2f0f1] w-[90%] md:w-full py-16">
      <h2 className="pb-16 px-10 mx-auto w-full font-bold text-[35px] font-[cairo] text-center">
        BROWSE BY dress STYLE
      </h2>
      <div className="w-full flex gap-4 flex-wrap md:flex-nowrap">
        <div className="w-full md:w-[35%] rounded-[15px] overflow-hidden h-[200px] md:h-[280px] relative bg-white group hover:cursor-pointer">
          <div className="object-right scale-[2] md:scale-[1.5] group-hover:scale-[3] transition-transform duration-300">
            <img src={casual} className="scale-x-[-1]" />
          </div>
          <div className="absolute top-4 left-4 text-black text-2xl font-bold group-hover:underline">
            Casual
          </div>
        </div>
        <div className="w-full md:w-[65%] rounded-[15px] overflow-hidden h-[200px] md:h-[280px] relative bg-white group hover:cursor-pointer">
          <div className="object-right scale-[2] md:scale-[1.5] group-hover:scale-[3] transition-transform duration-300">
            <img src={formal} className="scale-x-[-1]" />
          </div>
          <div className="absolute top-4 left-4 text-black text-2xl font-bold group-hover:underline">
            Formal
          </div>
        </div>
      </div>
      <div className="w-full flex gap-4 flex-wrap md:flex-nowrap mt-4">
        <div className="w-full md:w-[65%] rounded-[15px] overflow-hidden h-[200px] md:h-[280px] relative bg-white group hover:cursor-pointer">
          <div className="object-right scale-[2] md:scale-[1.5] group-hover:scale-[3] transition-transform duration-300">
            <img src={party} />
          </div>
          <div className="absolute top-4 left-4 text-black text-2xl font-bold group-hover:underline">
            Party
          </div>
        </div>
        <div className="w-full md:w-[35%] rounded-[15px] overflow-hidden h-[200px] md:h-[280px] relative bg-white group hover:cursor-pointer">
          <div className="object-right-bottom absolute right-[0px] w-[50%] scale-[2] md:scale-[1.5] group-hover:scale-[3] transition-transform duration-300">
            <img src={gym} className="object-right-bottom" />
          </div>
          <div className="absolute top-4 left-4 text-black text-2xl font-bold group-hover:underline">
            Gym
          </div>
        </div>
      </div>
    </div>
  );
}

export default StylesSections;
