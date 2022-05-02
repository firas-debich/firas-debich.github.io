import React from "react";
import MyPicture from "../assets/picture.jpg";
const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div data-aos="flip-right" className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#ff914d]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="sm:text-right text-4xl font-bold"
          >
            <img className="rounded" src={MyPicture} alt="firas debbich" />
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            <div className="text-justify text-4xl font-bold">
              <p>Hi. I'm Firas, nice to meet you. Please take a look around.</p>
            </div>
            <p className="text-justify">
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
