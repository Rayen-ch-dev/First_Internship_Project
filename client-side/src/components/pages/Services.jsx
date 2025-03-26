import BlogSection from "./BlogSection";
import data from "../../../photos.json";
import PhotoSection from "./PhotoSection";


function Services() {
  return (
    <>
 
      <div className="flex justify-center font-bold text-lg mt-16 p-3  md:text-2xl">
        {" "}
        Our Services
      </div>
      <div className="container mb-16">
        {data.map((item) => (
          <div
            key={item.id}
            className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${
              item.id % 2 == 0 ? "" : "sm:[&>*:first-child]:order-2"
            }`}
          >
            {/* description content*/}
            <div className="h-[300px] w-full">
              <BlogSection
                subtitle={item.subtitle}
                description={item.description}
              />
            </div>

            {/* Photo */}
            <PhotoSection url={item.url} alt={item.alt} />
          </div>
        ))}
      </div>
    </>
  );
}
export default Services;
