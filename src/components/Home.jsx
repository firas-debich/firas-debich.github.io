import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typed from "react-typed";

const Home = () => {
  const textLines = [`  I'm a Full Stack Developer.`];
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#ff914d]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Firas Debbich
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          <Typed strings={textLines} typeSpeed={80} backSpeed={80} loop />
        </h2>
        <p className="text-[#8892b0] text-justify py-4 max-w-[700px]">
          I’m a full-stack developer specializing in building  exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className="text-white group border-2 rounded px-6 py-3 my-2 flex items-center hover:bg-[#ff914d] hover:border-[#ff914d]">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
      
        </div>
        
      </div>
   
    </div>
  );
};

export default Home;
