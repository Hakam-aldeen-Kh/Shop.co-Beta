import NavButton from "@components/common/Buttons/NavButton";
import RightArrow from "@assets/svg/right-arrow.svg";

function Breadcrumbs({ title, product }: { title: string; product?: string }) {
  return (
    <div className="container w-full">
      <nav
        aria-label="breadcrumb"
        className="w-fit ml-0 mt-[100px] text-black font-[ubuntu]"
      >
        <ol className="flex flex-wrap items-center w-full py-5 rounded-md bg-white bg-opacity-60">
          <li className="flex items-center text-sm antialiased leading-normal transition-colors duration-300 cursor-pointer text-blue-gray-900 hover:text-gray-600">
            <NavButton className="custom-button" to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
            </NavButton>
          </li>
          <span className="mx-2 text-sm antialiased leading-normal pointer-events-none select-none text-blue-gray-500">
            <img src={RightArrow} alt="arrow" />
          </span>
          <li className="flex items-center text-sm antialiased leading-normal transition-colors duration-300 cursor-pointer text-blue-gray-900 hover:text-gray-600">
            <NavButton to={`/${title.toLowerCase()}`} className="custom-button">
              <span>{title}</span>
            </NavButton>
          </li>
          {product && (
            <>
              <span className="mx-2 text-sm antialiased leading-normal pointer-events-none select-none text-blue-gray-500">
                <img src={RightArrow} alt="arrow" />
              </span>
              <li className="flex items-center text-sm antialiased leading-normal transition-colors duration-300 cursor-pointer text-blue-gray-900 hover:text-gray-600">
                <span>{product}</span>
              </li>
            </>
          )}
        </ol>
      </nav>
    </div>
  );
}

export default Breadcrumbs;
