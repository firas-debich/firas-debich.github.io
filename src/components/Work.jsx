import React from "react";

import CarousselCardes from "./CarouselCards/CarousselCardes";
import ProjectData from "../constant/ProjectConstant"
const Work = () => {
  
  return (
    <div name="work" className="w-full text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#ff914d]">
            Work
          </p>
        </div>

        {/* Container */}
        <div className="flex items-center justify-between flex-wrap">
         
      {ProjectData?.map((project,idx) => (
        <CarousselCardes key={idx} project={project} />
      ))}

         
        </div>
      </div>
    </div>
  );
};

export default Work;
