import logoImage from "@/assets/images/logosaas.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="container">
        <div className="py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 blur-md bg-gradient-to-r from-[#F87BFF] via-[#FB92CF] to-[#2FD8FE]"></div>
            <Image
              src={logoImage}
              alt="Sass Logo"
              className="h-12 w-12 relative"
              priority
            />
          </div>

          {/* Burger Menu */}
          <div className="border border-white border-opacity-30 w-10 h-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </div>

          {/* Main Navigation */}
          <nav className="sm:flex items-center gap-6 hidden">
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              About
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Features
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Updates
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Help
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Customers
            </a>
            <button className="bg-white py-2 px-4 rounded-lg">
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
