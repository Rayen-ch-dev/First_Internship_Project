import { IoLocationOutline } from "react-icons/io5";
import Socials from "../constants/Socials";
import { CiPhone } from "react-icons/ci";

function Footer() {
  return (
    <>
      {/* line of 1px*/}
      <div className="   bg-orange-600  w-full h-[2px] z-60"></div>
      <div className="  container bottom-0 left-0 right-0 w-full h-full bg-gray-950">
        <div className="block p-3 sm:flex  justify-between ">
          <div className="p-3">
            <h1 className="md:text-lg">Location</h1>
            <a
              href="https://maps.app.goo.gl/w92EPQ3tmmjfDYuv7"
              className="flex hover:text-orange-600 items-center my-1"
            >
              <IoLocationOutline className="text-lg mr-3" />
              <span className="md:text-lg">Av.Habib Bourguiba, Beni Khiar, Tunisia</span>
            </a>
            <span className="flex "><CiPhone className="text-xl mr-3" /> (+216) 22 659 974 / 25 666 252 / 72 228 544</span>
          </div>
          <div className="p-3">
            <h1 className="md:text-lg" >Find us online</h1>
            <Socials footer={"footer"} className=" md:text-sm"/>
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-3 items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved</p>

      </div>
      
    </>
  );
}

export default Footer;
