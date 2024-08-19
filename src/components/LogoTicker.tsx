"use client";

import Image from "next/image";
import images from "@/utilities/data";
import { motion } from "framer-motion";

const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-xl sm:text-2xl text-center text-white/70">
          Trusted by the world&apos;s most innovative teams
        </h2>
        <div className="flex logo-ticker overflow-hidden mt-9 sm:mt-12 relative before:z-10 before:w-5 sm:before:w-[300px] after:w-5 sm:after:w-[300px]">
          <motion.div
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-none justify-center gap-16 pr-16"
          >
            {images.map((image) => (
              <div key={image.name} className="min-w-40">
                <Image
                  src={image.src}
                  alt={image.name}
                  className="flex-none h-8 w-auto"
                />
              </div>
            ))}

            {images.map((image) => (
              <div key={image.name} className="min-w-40">
                <Image
                  src={image.src}
                  alt={image.name}
                  className="flex-none h-8 w-auto"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default LogoTicker;
