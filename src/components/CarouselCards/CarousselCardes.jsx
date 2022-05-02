import React from "react";

const CarousselCardes = ({ project }) => {
  return (
    <>
      <div
        data-aos="flip-left"
        class="max-w-sm hover:scale-110 duration-500 rounded shadow-md shadow-[#040c16] mb-8 rounded overflow-hidden shadow-lg"
      >
        <img class="w-full" src={project.image} alt="Sunset in the mountains" />
        <div class="px-6 py-4 bg-[#0a192f]">
          <div class="font-bold text-[#ccd6f6] text-xl mb-2">{project.title}</div>
          <p class="text-[#8892b0]  text-base">{project.description}</p>
        </div>
        <div class="px-6 pt-4 pb-2 bg-[#0a192f]">
          {project.tags.map((tag, idx) => (
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{tag}
            </span>
          ))}
        </div>
        <div style={{marginBottom: "inherit"}} className="bg-[#0a192f] flex justify-evenly items-center">
          <button 
           onClick={() => window.open(project.visit, "_blank")} 
          className="bg-[#ff914d] hover:bg-[#ff914d] text-white font-bold py-2 px-4 rounded">
            Demo
          </button>
          <button 
           onClick={() => window.open(project.source, "_blank")}
          className="bg-transparent  hover:bg-[#ff914d] text-[#ff914d] font-semibold hover:text-white py-2 px-4 border border-[#ff914d] hover:border-transparent rounded">
            Code
          </button>
        </div>
      </div>
    </>
  );
};

export default CarousselCardes;
