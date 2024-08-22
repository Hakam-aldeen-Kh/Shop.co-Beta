import Lottie from "lottie-react";
import Error from "@assets/Lottiefiles/Error.json";
import Empty from "@assets/Lottiefiles/Empty.json";
import notFound from "@assets/Lottiefiles/notFound.json";

const lottieTypes = {
  Error,
  Empty,
  notFound,
};

type TLottieComponent = {
  type: keyof typeof lottieTypes;
  message?: string | null;
};

function LottieHandler({ type, message }: TLottieComponent) {
  const lottie = lottieTypes[type];
  return (
    <div className="text-center flex items-center flex-col my-[50px]">
      <Lottie animationData={lottie} className="w-[200px]" />
      {message && (
        <h3 className="font-bold mb-3 w-full  md:w-[75%] font-[cairo] leading-10">
          {message}
        </h3>
      )}
    </div>
  );
}

export default LottieHandler;
