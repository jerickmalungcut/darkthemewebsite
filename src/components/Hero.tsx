const Hero = () => {
  return (
    <div className="bg-black text-white hero-gradient py-[72px]">
      <div className="container">
        <div className="flex items-center justify-center">
          <a href="#" className="border border-white/30 py-1 px-2 rounded-lg">
            <span className="bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text [-webkit-background-clip:text]">
              Version 2.0 is here
            </span>
            <span>Read more</span>
          </a>
        </div>

        <h1>One Task at a Time</h1>
        <p>
          Celebrate the joy of accomplishment with an app designed to track
          progress, motivate your efforts, and celebrate your success.
        </p>
        <button>Get for free</button>
      </div>
    </div>
  );
};
export default Hero;
