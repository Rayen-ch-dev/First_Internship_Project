import Socials from "../../constants/Socials";
import PhotoSection from "./PhotoSection";
import data from "../../../who-we-are.json";
import card from "../../../cards.json";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      {/* Who We Are Section */}
      <div className="container mx-auto mt-16  bg-gray-950 py-10 px-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Who We Are?
        </h1>
        <p className="text-base md:text-lg lg:text-xl mb-4 leading-relaxed text-justify">
          At {" "}
          <span className="text-orange-600 text-xl  font-semibold">
            LaboPhotoChakib
          </span>
          , we specialize in capturing life’s most cherished moments. With over{" "}
          <span className="underline text-lg md:text-xl">
            10 years of experience
          </span>
          , we are dedicated to providing professional photography and
          videography services that exceed expectations. Based in Beni Khiar,
          Tunisia, our mission is to turn your stories into stunning visual
          memories.
        </p>
        <p className="text-base md:text-lg lg:text-xl mb-6 leading-relaxed text-justify">
          Experience professionalism, creativity, and quality with Chakib
          Photographe, where your moments come to life.
        </p>
        <div className="flex justify-center">
          <Socials />
        </div>
      </div>

      {/* Divider */}
      <div className=" bg-orange-600 w-full h-[2px]"></div>

      {/* Dynamic Grid Section */}
      <section className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          {/* Dynamic Grid Section */}
          <div className="py-10">
            {data.map((item) => (
              <div
                key={item.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch mb-8 ${
                  item.id % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                {/* Description Content */}
                <div className=" flex justify-center items-center  md:min-h-[300px] w-full  text-base md:text-xl leading-relaxed text-white">
                  <p className="p-2">{item.description}</p>
                </div>

                {/* Photo */}
                <div className="flex justify-center items-center p-1">
                  <PhotoSection url={item.url} alt={item.alt} />
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Us Section */}
          <div className="py-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {card.map((item) => (
                <div className="flex items-start gap-4" key={item.id}>
                  <div className="p-2">
                    <h3 className="text-xl md:text-2xl text-orange-600 font-semibold">
                      {item.subtitle}
                    </h3>
                    <p className="text-base md:text-lg text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call-to-Action Section */}
          <div className="py-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bring Your Vision to Life
            </h2>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Whether you’re planning a wedding, a special event, or a
              photoshoot, we’re here to make your dreams a reality. Contact us
              today to learn more or book your session!
            </p>
            <Link
              to={"/contact"}
              className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-orange-600 transition duration-300 ease-out border-2 border-orange-600 rounded-full shadow-md group"
            >
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-600 group-hover:translate-x-0 ease">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="absolute flex font-bold items-center justify-center w-full h-full text-orange-600 transition-all duration-300 transform group-hover:translate-x-full ease">
                Contact Us
              </span>
              <span class="relative invisible">Contact Us</span>
            </Link>

          </div>
        </div>
      </section>
    </>
  );
}

export default About;
