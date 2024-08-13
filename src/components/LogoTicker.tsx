import Image from "next/image";
import images from "@/utilities/data";

const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px]">
      <div className="container">
        <h2 className="text-xl text-center text-white/70">
          Trusted by the world&apos;s most innovative teams
        </h2>
        <div className="overflow-hidden mt-9 before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-20 after:w-20 relative before:bg-red-500 after:bg-red-500 before:left-0 after:right-0 before:top-0 after:top-0">
          <div className="flex gap-16 ">
            {images.map((image) => (
              <div key={image.name}>
                <Image
                  src={image.src}
                  alt={image.name}
                  className="flex-none h-8 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogoTicker;
