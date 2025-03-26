import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import BlogSection from "./BlogSection";
import Socials from "../../constants/Socials";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import blogData from "../../../blog.json"
function Home() {
  useGSAP(() => {
    gsap.fromTo(
      ".box",
      {
        y: 20, // Move the div 100px to the right
        opacity: 0,
      },
      {
        // Fade in
        y: 0,
        opacity: 1,
        duration: 1, // Animation duration
        scrollTrigger: {
          trigger: ".box", // Element that triggers the animation
          start: "top 80%", // When the top of the element hits 80% of the viewport
          end: "top 20%", // When the top of the element hits 20% of the viewport
          toggleActions: "play none none reverse", // Play the animation when scrolled into view, reverse when scrolled out
        },
      }
    );

    gsap.fromTo(
      ".personnel-img",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power1.inOut",
      }
    );

    gsap.fromTo(
      ".all-texts",

      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1,
        stagger: 0.3,
      }
    );
  });
  return (
    <>
      <div className="container  top-0 left-0 w-full flex mt-20 bg-gray-950 flex-row h-80 md:h-96 lg:h-screen">
        <div className=" absolute - mt-9 ml-5 md:ml-9">
          <h4 id="hi" className=" all-texts md:text-2xl  xl:mt-20 ">
            Welcome to
          </h4>
          <div className=" all-texts flex flex-row md:flex-col py-3 font-bold text-3xl p-1 md:text-5xl lg:text-6xl xl:text-7xl text-orange-600">
            <span className="  all-texts px-1">Chakib</span>
            <span className=" all-texts px-1">Photographe</span>
          </div>
          <div className="  all-texts flex flex-col font-serif text-2xl py-3 md:text-3xl ">
            <p>Wedding,protraite,event… 🎬🎞️</p>
            <p>Turning moments into memories</p>
          </div>
          <Socials />
        </div>

        <div className=" personnel-img -mt-4 w-3/6  lg:w-3/5 mb-5 md:mb-0 md:block absolute right- lg:-right-52 md:-right-32 sm:-right-20 md:mt-10 lg:mt-5 xl:mt-4">
          <img
            src="/images/Camera-amico.png"
            alt="personnel-image"
            className="rounded-none w-full h-1/3  pointer-events-none select-none hidden sm:block sm:h-[250px] sm:w-[230px] lg:h-[350px] lg:w-[350px]  xl:h-[500px] xl:w-[500px]   "
          />
        </div>
      </div>
      {/* line of 1px*/}
      <div className=" absolute bg-orange-600  w-full h-[2px] z-60"></div>
      {/*div for see more services*/}
      <div className="w-full h-13 bg-[#010101] flex justify-end p-3">

        <Link to="/Services">
          <span className="text-sm md:text-lg m-1  hover:text-orange-500 text-orange-600">
            View All Services
          </span>
        </Link>
      </div>
      {/* why us section*/}
      <div className="container  mb-15 grid grid-cols-1 md:grid-cols-2  bg-[#010101] gap-4  w-full  h-full ">
        {blogData.map((item) => {
          return(          <BlogSection
            key={item.id}
            url={item.url}
            subtitle={item.subtitle}
            botton={"botton"}
            description={item.description}
          />);

        })}

       
      </div>
    </>
  );
}
export default Home;
