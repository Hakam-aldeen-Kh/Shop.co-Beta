import { useState, useRef, useEffect } from "react";
import Basket from "@assets/svg/Basket.svg";
import User from "@assets/svg/User.svg";
import DownArrow from "@assets/svg/DownArrow.svg";
import NavButton from "../Buttons/NavButton";
import { useAppSelector } from "@store/hooks";

function Header() {
  const [display, setDisplay] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const headerRef = useRef(null);
  const { totalItems } = useAppSelector((state) => state.cart);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={headerRef}
      className={`fixed w-full bg-white z-50 top-0 transition-shadow duration-300 ${
        hasShadow ? "shadow-md" : ""
      }`}
    >
      {display && (
        <div className="bg-black text-white text-center text-xs font-[cairo] font-normal py-[5px] relative flex items-center">
          <div className="w-full container">
            Sign up and get 20% off to your first order.{" "}
            <span className="font-semibold underline">Sign Up Now</span>
          </div>
          <i
            className="fa-solid fa-xmark text-white absolute right-5 md:right-10 text-base hover:cursor-pointer"
            onClick={() => {
              setDisplay(false);
            }}
          ></i>
        </div>
      )}
      <div className="container py-5 flex items-center justify-between">
        <div className="flex items-center">
          <div className="md:hidden mr-4">
            <i
              className={`fa-solid ${
                menuOpen ? "fa-xmark" : "fa-bars"
              } text-xl`}
              onClick={() => {
                setMenuOpen(!menuOpen);
                setSearchOpen(false);
              }}
            ></i>
          </div>
          <NavButton to="/" className="my-custom-class">
            <h1 className="font-[cairo] font-bold text-3xl">SHOP.CO</h1>
          </NavButton>
        </div>
        <ul
          className={`${menuOpen ? "flex" : "hidden"} ${
            display ? "top-16" : "top-10"
          } z-30 flex-col md:flex-row md:flex items-center w-full md:w-[40%] lg:w-[30%] font-[ubuntu] absolute md:relative bg-black md:bg-transparent text-white md:text-black md:top-auto left-0 md:left-auto mt-5 md:mt-0`}
        >
          <li className="flex justify-center py-2 border-b-2 border-gray-50 w-full md:border-none">
            Shop
            <img src={DownArrow} alt="" className="ml-1" />
          </li>
          <li className="py-2 border-b-2 border-gray-50 w-full text-center md:border-none">
            Contact Us
          </li>
          <li className="py-2 border-b-2 border-gray-50 w-full text-center md:border-none">
            Wishlist
          </li>
        </ul>
        <div className="relative text-gray-500 hidden md:block w-[40%]">
          <i className="fa-solid fa-magnifying-glass absolute top-[50%] translate-y-[-50%] left-3 text-lg"></i>
          <input
            type="text"
            placeholder="Type to search"
            className="outline-none bg-[#F0F0F0] border-2 rounded-[50px] text-sm py-2 px-10 w-full font-[ubuntu] font-normal font-400"
          />
        </div>
        <div className="flex items-center">
          <div className="flex md:hidden items-center">
            <i
              className="fa-solid fa-magnifying-glass text-xl mr-4"
              onClick={() => {
                setSearchOpen(!searchOpen);
                setMenuOpen(false);
              }}
            ></i>
          </div>
          <div className="flex items-center">
            <NavButton to="/cart" className="my-custom-class">
              <div className="relative w-fit">
                {totalItems > 0 && (
                  <div className="text-[10px] font-semibold w-[20px] h-[20px] p-1 flex justify-center items-center rounded-full text-white bg-black absolute top-[-6px] left-4">
                    {totalItems}
                  </div>
                )}
                <img
                  src={Basket}
                  alt="Basket Icon"
                  className="w-[25px] mr-4 md:mx-6"
                />
              </div>
            </NavButton>
            <img src={User} alt="User Icon" className="w-[25px]" />
          </div>
        </div>
      </div>
      {searchOpen && (
        <div
          className={`${
            display ? "top-18" : "top-16"
          } absolute  left-0 w-full bg-white p-4 md:hidden z-30`}
        >
          <input
            type="text"
            placeholder="Type to search"
            className="outline-none bg-[#F0F0F0] border-2 rounded-[50px] text-sm py-2 px-10 w-full font-[ubuntu] font-normal font-400"
          />
        </div>
      )}
    </section>
  );
}

export default Header;
