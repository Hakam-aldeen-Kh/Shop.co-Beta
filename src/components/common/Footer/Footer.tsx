import { Button } from "@material-tailwind/react";
import { useState } from "react";
import Visa from "@assets/svg/Visa.svg";
import Mastercard from "@assets/svg/Mastercard.svg";
import Paypal from "@assets/svg/Paypal.svg";
import APay from "@assets/svg/APay.svg";
import GPay from "@assets/svg/G Pay.svg";

function Footer() {
  const [social] = useState(["twitter", "facebook-f", "instagram", "github"]);
  const [links] = useState([
    "https://www.twitter.com",
    "https://www.facebook.com",
    "https://www.instagram.com",
    "https://www.github.com",
  ]);
  const [svgs] = useState([Visa, Mastercard, Paypal, APay, GPay]);
  return (
    <section className="mt-[250px] md:mt-[200px] bg-[#F0F0F0]">
      {/* //* Container */}
      <div className="container mx-auto">
        {/* //* Subscribe Section */}
        <div className="bg-black w-full translate-y-[-50%] text-white rounded-[15px] py-[36px] px-[36px] md:px-[64px]x font-[cairo] flex justify-between items-center flex-wrap">
          <h2 className="text-[35px] font-bold text-wrap w-full md:w-[40%]">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <div className="w-full md:w-[350px] font-[ubuntu] mt-[25px] md:mt-0">
            <div className="w-full py-[10px] px-[8px] bg-white rounded-full flex justify-between items-center">
              <i className="fa-regular fa-envelope text-gray-600 mx-5 text-[20px]"></i>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full outline-none text-gray-600"
              />
            </div>
            <Button
              variant="outlined"
              className="rounded-full border-none outline-none shadow-none bg-white w-full mt-4 capitalize text-[14px]"
            >
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
        {/* //* Boxes Section */}
        <div className="flex gap-x-20 flex-wrap md:flex-nowrap">
          {/* //* Logo Box */}
          <div className="mt-[-50px] md:w-[20%] w-full">
            <h1 className="font-[cairo] font-bold text-3xl">SHOP.CO</h1>
            <p className="text-gray-800 my-[22px] font-[ubuntu] text-sm w-full">
              We have clothes that suits your style and which you’re proud to
              wear.
              From women to men.
            </p>
            <div className="mt-4 flex justify-between gap-2 items-center w-[50%] md:w-[100%]">
              {social.map((el: string, idx) => (
                <div
                  key={idx}
                  className="bg-white flex justify-center items-center rounded-full p-1 w-[40px] h-[40px] text-lg hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
                >
                  <a
                    href={links[idx]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={`fa-brands fa-${el}`}></i>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="flex w-full flex-wrap">
            {/* //* Main Box 1 */}
            <div className="flex w-full md:w-[50%] flex-wrap">
              {/* //* Box 1 */}
              <div className="mt-5 md:mt-[-50px] font-[ubuntu] flex flex-col flex-grow ">
                <h3 className="font-normal">COMPANY</h3>
                <ul className="flex-grow flex flex-col justify-between text-gray-700 w-fit">
                  <li className="my-2 cursor-pointer hover:underline">About</li>
                  <li className="my-2 cursor-pointer hover:underline">
                    Features
                  </li>
                  <li className="my-2 cursor-pointer hover:underline">Works</li>
                  <li className="my-2 cursor-pointer hover:underline">Team</li>
                </ul>
              </div>
              {/* //* Box 2 */}
              <div className="mt-5 md:mt-[-50px] font-[ubuntu] flex flex-col flex-grow">
                <h3 className="font-normal">COMPANY</h3>
                <ul className="flex-grow flex flex-col justify-between text-gray-700 w-fit">
                  <li className="my-2 cursor-pointer hover:underline">About</li>
                  <li className="my-2 cursor-pointer hover:underline">
                    Features
                  </li>
                  <li className="my-2 cursor-pointer hover:underline">Works</li>
                  <li className="my-2 cursor-pointer hover:underline">Team</li>
                </ul>
              </div>
            </div>
            {/* //* Main Box 2 */}
            <div className="flex w-full md:w-[50%] flex-wrap">
              {/* //* Box 1 */}
              <div className="mt-5 md:mt-[-50px] font-[ubuntu] flex flex-col flex-grow">
                <h3 className="font-normal">COMPANY</h3>
                <ul className="flex-grow flex flex-col justify-between text-gray-700 w-fit">
                  <li className="my-2 cursor-pointer hover:underline">About</li>
                  <li className="my-2 cursor-pointer hover:underline">
                    Features
                  </li>
                  <li className="my-2 cursor-pointer hover:underline">Works</li>
                  <li className="my-2 cursor-pointer hover:underline">Team</li>
                </ul>
              </div>
              {/* //* Box 2 */}
              <div className="mt-5 md:mt-[-50px] font-[ubuntu] flex flex-col flex-grow">
                <h3 className="font-normal">COMPANY</h3>
                <ul className="flex-grow flex flex-col justify-between text-gray-700 w-fit">
                  <li className="my-2 cursor-pointer hover:underline">About</li>
                  <li className="my-2 cursor-pointer hover:underline">
                    Features
                  </li>
                  <li className="my-2 cursor-pointer hover:underline">Works</li>
                  <li className="my-2 cursor-pointer hover:underline">Team</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-gray-500 h-[0.1rem] my-[25px]" />
        <div className=" flex flex-wrap w-full justify-center md:justify-between pb-16">
          <p className="font-[ubuntu] text-gray-700">
            Shop.co © 2003-2024, All Rights Reserved
          </p>
          <div className="flex justify-between w-[75%] md:w-[20%] mt-5 md:mt-0">
            {svgs.map((svg) => (
              <div className="bg-white w-[15%] flex justify-center items-center">
                <img src={svg} className="w-[80%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
