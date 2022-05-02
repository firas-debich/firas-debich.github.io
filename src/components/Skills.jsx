import React, { useEffect, useState } from "react";

import SkillsConstant from "../constant/SkillsConstant";
const Skills = () => {

  return (
    <div name="skills" className="w-full  bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#ff914d] ">
            Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4  gap-3 text-center py-8">
          {SkillsConstant.map(({ src, name }, idx) => (
            <div
              data-aos="flip-left"
              className="shadow-md shadow-[#040c16] rounded  hover:scale-110 duration-500"
            >
              <img className="w-20 mx-auto" src={src} alt="HTML icon" />
              <p className="my-4">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
