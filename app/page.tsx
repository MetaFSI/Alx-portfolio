import React from 'react';
import projectSkills from './skills'; // Importing the array of project skills

export default function Home() {
  return (
    <div className="bg-gray-200 mt-[5.3vh] grid grid-cols-3 gap-4  shadow-inner shadow-black/10 h-[88vh] mx-3 rounded-3xl p-3 ">
      {projectSkills.map((skill:any,key:any) => (
        <div key={skill.id} className=" bg-white rounded-2xl border-2 hover:border-gray-600 border-transparent transition-all cursor-pointer  shadow flex flex-col items-center justify-center px-5 gap-8">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-gray-600">{skill.skill}</h2>
          <p className="">{skill.description}</p>
        </div>
      ))}
    </div>
  );
}
