import Lottie from "lottie-react";
import Error from "@assets/Lottiefiles/Error.json";

const lottieTypes = {
  Error,
};

type TLottieComponent = {
  type: keyof typeof lottieTypes;
  message?: string | null;
};

function LottieHandler({ type, message }: TLottieComponent) {
  const lottie = lottieTypes[type];
  return (
    <div className="text-center flex items-center flex-col">
      <Lottie animationData={lottie} className="w-[200px]" />
      {message && <h3 className="font-bold mb-3">{message}</h3>}
    </div>
  );
}

export default LottieHandler;
