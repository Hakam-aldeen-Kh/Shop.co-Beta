import { useState } from "react";

import Toparrow from "@assets/svg/top-arrow.svg";
function MainTitle({title, children} : {title : string , children: React.ReactNode}) {
  const [show, setShow] = useState(true);
  return (
    <>
    <div className="flex justify-between items-center">
      <h3 className="font-bold text-base">{title}</h3>
      <img
        src={Toparrow}
        alt="arrow"
        className={`cursor-pointer transition-transform duration-200 ${
          show === false ? "rotate-180" : "rotate-0"
        } `}
        onClick={() => {
          setShow(!show);
        }}
      />
    </div>
    <div className={`pt-5 ${show === false ? "hidden" : "block" }`} >
      {children}
    </div>
    </>
  );
}

export default MainTitle;
