import { GrFormNextLink } from "react-icons/gr";
import { Link } from "react-router-dom";
function BlogSection({ description, subtitle, url, botton }) {
  return (
    <div className="group box h-full w-full rounded-lg p-[2px] md:mx-3 mt-4 lg:mx-4 flex-1 bg-gray-900 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-500 transition-all duration-300">
      <div
        className="w-full h-full bg-cover object-cover  bg-center rounded-lg p-3 bg-black flex flex-col justify-between  text-ellipsis"
        style={{ backgroundImage: `url(${url})` }}
      >
        <div className="p-2 text-lg lg:text-2xl text-orange-600">
          <h4 className="group-hover:text-yellow-500 cursor-pointer font-bold">
            {subtitle}
          </h4>
        </div>
        <div className="p-2 flex-grow">
          <p className="md:text-lg text-white line-clamp- overflow-hidden">
            {description}
          </p>
        </div>
        {botton && (
          <div className="p-2">
            <Link to="/Services">
              <span className="text-[15px] md:text-lg m-1 items-center hover:text-orange-500 flex flex-row text-orange-600">
                Read more <GrFormNextLink className="text-xl" />
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogSection;
