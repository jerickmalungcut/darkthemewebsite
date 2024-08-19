import InstaIcon from "@/assets/icons/insta.svg";
import Xsocial from "@/assets/icons/x-social.svg";
import TiktokIcon from "@/assets/icons/tiktok.svg";
import YoutubeIcon from "@/assets/icons/youtube.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="text-center">
            &copy; 2024 JRKM. All rights reserved
          </div>
          <ul className="flex justify-center gap-2.5">
            <li className="">
              <Image src={Xsocial} alt="Twitter" className="invert" />
            </li>
            <li className="">
              <Image src={TiktokIcon} alt="Tiktok" className="invert" />
            </li>
            <li className="">
              <Image src={InstaIcon} alt="IG" className="invert" />
            </li>
            <li className="">
              <Image src={YoutubeIcon} alt="Youtube" className="invert" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
