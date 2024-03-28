import React from 'react';
import projectSkills from './skills'; // Importing the array of project skills

export default function Home() {
  return (
    <div className="bg-gray-200 mt-[5.3vh] grid grid-cols-3 gap-4  shadow-inner shadow-black/10 h-[88vh] mx-3 rounded-3xl p-3 ">
      {projectSkills.map((skill:any,key:any) => (
        <div key={skill.id} className=" bg-white rounded-2xl shadow flex flex-col items-center justify-center px-5 gap-8">
          <h2 className="text-5xl font-semibold text-gray-500">{skill.skill}</h2>
          <p className="">{skill.description}</p>
        </div>
      ))}
    </div>
  );
}
