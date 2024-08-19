"use client";

import helixImage from "@/assets/images/helix2.png";
import emojiStar from "@/assets/images/emojistar.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // useEffect(() => {
  //   scrollYProgress.on("change", (value) => console.log("value", value));
  // }, []);

  const translateY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <div
      className="bg-black text-white py-[72px] sm:py-24 text-center"
      ref={containerRef}
    >
      <div className="container max-w-xl sm:max-w-2xl relative">
        <motion.div style={{ translateY: translateY }}>
          <Image
            src={helixImage}
            alt="Helix Image"
            className="absolute top-6 left-[calc(100%+36px)]"
          />
        </motion.div>

        <motion.div style={{ translateY: translateY }}>
          <Image
            src={emojiStar}
            alt="Emoji Star"
            className="absolute -top-[120px] right-[calc(100%+24px)]"
          />
        </motion.div>

        <h2 className="font-bold text-5xl sm:text-6xl tracking-tighter">
          Get instant access
        </h2>
        <p className="text-xl text-white/70 mt-5 mx-auto">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-md mx-auto sm:flex-row">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="your@email.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
          />
          <button className="bg-white text-black h-12 rounded-lg px-5 font-semibold">
            Get access
          </button>
        </form>
      </div>
    </div>
  );
};
export default CallToAction;
