import { FaArrowRightLong } from "react-icons/fa6";
import cursorImage from "@/assets/images/cursor.png";
import messageImage from "@/assets/images/message.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-black text-white hero-gradient py-[72px] sm:py-24 relative overflow-clip">
      {/* Radiant Circle */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%-96px)] sm:top-[calc(100%-120px)] h-[375px] w-[750px] sm:h-[768px] sm:w-[1536px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black border border-[#B48CDE] round-gradient"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex gap-3 border border-white/30 py-1 px-2 rounded-lg"
          >
            <span className="subheading-gradient text-transparent bg-clip-text [-webkit-background-clip:text]">
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="text-sm">Read more</span>
              <FaArrowRightLong />
            </span>
          </a>
        </div>

        {/* Main Heading */}
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1 className="inline-flex text-7xl sm:text-9xl font-bold tracking-tighter text-center">
              One Task <br /> at a Time
            </h1>
            <Image
              src={cursorImage}
              alt="Cursor Image"
              height="200"
              width="200"
              className="absolute right-[476px] top-[108px] hidden sm:inline"
            />
            <Image
              src={messageImage}
              alt="Cursor Image"
              height="200"
              width="200"
              className="absolute left-[498px] top-[56px] hidden sm:inline"
            />
          </div>
        </div>

        {/* Sub heading */}
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md">
            Celebrate the joy of accomplishment with an app designed to track
            progress, motivate your efforts, and celebrate your success.
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
