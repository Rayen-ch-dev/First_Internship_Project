import Socials from "../../constants/Socials";
import data from "../../../contacts.json";
import Form from "./Form";

function Contact() {
  return (
    <div className="bg-gray-900 mt-16 text-white">
      {/* Header Section */}
      <div className="container bg-gray-950 mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex justify-center items-center">
          <img
            src="images/sendmail.png"
            className="h-[300px] sm:h-[400px] w-auto object-contain"
            alt="Send Email Icon"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl py-2 font-bold text-orange-600">
            Send Us a Message
          </h1>
          <p className="text-lg sm:text-xl py-2">
            We appreciate direct contact, so you can send us an email or reach
            out via social media.
          </p>
          <div className="mt-4">
            <Socials />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-orange-600 w-full h-[2px] "></div>

      {/* Contact Us Information Section */}
      <div className="container grid grid-cols-1 md:grid-cols-2  mx-auto px-4">
        {data.sections.map((item) => (
          <div key={item.id} className=" border rounded-xl border-gray-500  m-5 p-5">
            <h2 className="text-2xl flex justify-center md:text-3xl py-2 font-bold text-orange-500">
              {item.title}
            </h2>
            <div>
            <p className="md:text-lg px-10 ">
              {item.content}
              <a
                href={item.link.href}
                className="text-orange-600  font-bold md:text-lg mx-1 hover:text-orange-500 hover:underline"
              >
                {item.link.text}
              </a>
              {item.closing}
            </p>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="bg-orange-600 w-full h-[2px] my-8"></div>
      <h2 className="flex justify-center  font-bold text-2xl md:text-3xl text-orange-600">Contact Us</h2>

      {/* Contact Form Section */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Form */}
        <Form />
        {/* Image */}
        <div className="hidden md:flex justify-center items-center">
          <img
            src="images/form.png"
            className="h-[500px] w-auto object-cover"
            alt="Form Illustration"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="bg-orange-600 w-full h-[2px] my-8"></div>
      <h2 className="flex justify-center  font-bold text-2xl md:text-3xl my-3 text-orange-600">Find us</h2>

      {/* Map Section */}
      <div id="map" className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Map Icon */}
        <div className="hidden md:justify-center md:items-center md:flex">
          <img
            src="images/map-icon.png"
            className="h-[500px] w-auto object-cover"
            alt="Map Icon"
          />
        </div>
        {/* Embedded Google Map */}
        <div  className="w-full  h-[500px] p-2 ">
          <iframe
            className="w-full h-full rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3208.7473443635254!2d10.772763699999985!3d36.4636617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1302988474236a9d%3A0x7b93c105854b2c05!2sLABOPHOTOCHAKIB%20(chakibphotographe)!5e0!3m2!1sfr!2stn!4v1739010874784!5m2!1sfr!2stn"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
