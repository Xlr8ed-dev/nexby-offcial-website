import React from "react";
import logo from "../assets/logo.png";

const PageLoader: React.FC = () => {
  return (
    <div
      className="
        fixed 
        top-0 
        left-0 
        w-screen 
        h-screen 
        min-h-[100svh]
        z-[9999]
        flex 
        items-center 
        justify-center 
        bg-white
      "
    >
      <div className="flex flex-col items-center gap-4">
        <img src={logo} alt="Logo" className="h-12 sm:h-14 animate-pulse" loading="lazy" />

        <div className="h-1 w-32 sm:w-40 overflow-hidden rounded bg-gray-200">
          <div className="h-full w-1/3 animate-loading bg-black" />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
