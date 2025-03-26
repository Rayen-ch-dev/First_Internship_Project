import { Link, useLocation } from "react-router-dom";
import { Navigation } from "../constants";
import { useState } from "react";

function Header() {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
  };

  const handleLinkClick = () => {
    setOpenNavigation(false);
  };

  return (
    <div className="container p-2 mb-10 z-50 bg-gray-950 flex justify-between  fixed top-0 left-0 w-full">
      <div className=" mt-2 ">
        <img src="images/channels4_banner-removebg-preview.png" width={140} height={50} alt="logo" />
      </div>

      <div className="md:hidden z-50  duration-300  text-lg right-0 mt-2 mr-5 cursor-pointer font-bold">
        <ion-icon
          size="large"
          onClick={toggleNavigation}
          name={openNavigation ? "close" : "menu"}
        ></ion-icon>
      </div>
      {openNavigation && (
        <div
          className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-30"
          onClick={toggleNavigation} 
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 md:mr-16  h-screen bg-gray-950 z-40 transition duration-1000 ease-in-out md:static md:h-auto md:bg-transparent md:flex md:items-center md:justify-end md:space-x-6 ${
          openNavigation ? "flex flex-col font-mono items-center p-12 right-0  bg-gray-900 w-1/3 " : "hidden "
        }`}
      >
        {Navigation.map((item) => (
          <Link
            key={item.id}
            to={item.url}
            className={`text-xl p-4 lg:p-2 font-serif transition-colors duration-200 ${
              pathname.pathname === item.url
                ? "text-orange-600 "
                : "text-gray-400 hover:text-orange-600 hover:scale-110 duration-300 transition-transform"
            }`}
            onClick={handleLinkClick}
          >
            {item.title}
          </Link>
        ))}
  
      </div>
    </div>
  );
}

export default Header;
