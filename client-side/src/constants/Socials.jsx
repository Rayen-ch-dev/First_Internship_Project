import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { TbBrandYoutube } from "react-icons/tb";
function Socials({ footer }) {
  return (
    <div
      className={`all-texts flex flex-row cursor-pointer py-2 font-serif  ${footer=="footer" ? "text-2xl" : "text-2xl md:text-3xl "}`}
    >
      <a
        href="https://www.facebook.com/LaboPhotoChakib?mibextid=LQQJ4d"
        target="_blank"
        rel="noopener noreferrer"
        className=" hover:text-gray-400"
      >
        <CiFacebook className=" mr-3" />
      </a>
      <a
        href="https://www.instagram.com/chakibphotographelabo"
        target="_blank"
        rel="noopener noreferrer"
        className=" hover:text-gray-400"
      >
        <FaInstagram className=" mr-3" />
      </a>
      <a
        href="mailto:contact@labochakib.tn?subject=Hello&body=This is a test email."
        className=" hover:text-gray-400"
      >
        <IoMailOutline className="mr-3" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCHT_resklvnZwFV7lMcWnkw"
        className=" hover:text-gray-400"
      >
        <TbBrandYoutube />
      </a>
    </div>
  );
}

export default Socials;
