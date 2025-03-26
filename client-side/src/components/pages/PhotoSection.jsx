function PhotoSection({id,url,alt}) {
  return (
   <div className="h-[300px] mt-4 md:mx-4 w-full overflow-hidden rounded-lg">
      <img
        key={id}
        src={url}
        alt={alt}
        className="rounded-lg w-full h-full object-cover  select-none hover:scale-105 transition-transform duration-300 overflow-hidden"
      />
    </div>
  );
}

export default PhotoSection;
