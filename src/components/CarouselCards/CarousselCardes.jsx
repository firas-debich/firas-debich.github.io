import React from 'react'

const CarousselCardes = ({project}) => {
  return (
    <>
    <div  data-aos="flip-left" class="max-w-sm rounded shadow-md shadow-[#040c16] mb-8 rounded overflow-hidden shadow-lg">
  <img class="w-full" src={project.image}alt="Sunset in the mountains"/>
  <div class="px-6 py-4 bg-white">I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips?
    <div class="font-bold text-xl mb-2">{project.title}</div>
    <p class="text-gray-700 text-base">
      {project.description}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2 bg-white">
    {project.tags.map((tag,idx) => (
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
    ))}
    
    
  </div>
</div>
</>
  )
}

export default CarousselCardes