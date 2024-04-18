import React from 'react';
import projectSkills from './skills'; // Importing the array of project skills
import projectsX from './projects';

export default function Home() {
  return (
    <section>
      <div className="bg-gray-200 mt-[5.3vh] grid md:grid-cols-3 gap-4  shadow-inner shadow-black/10  mx-3 rounded-3xl p-3 ">
        {projectSkills.map((skill: any, key: any) => (
          <div key={skill.id} className=" bg-white rounded-2xl border-2 hover:border-gray-600 border-transparent transition-all cursor-pointer  shadow flex flex-col items-center justify-center px-5 gap-8">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-gray-600">{skill.skill}</h2>
            <p className="">{skill.description}</p>
          </div>
        ))}
      </div>
      <div className='grid mdgrid-cols-2 gap-3 m-3'>
        {projectsX.map((item:any, key:any) => (
          <div key={key} className='bg-gray-200 p-3 rounded-lg'>
            <h1 className='text-white text-xl'>{item.name}</h1>
            <p className='text-gray-400'>{item.description}</p>
            <div className='flex gap-3 my-2'>
              {item.skills.map((itemX:any, keyX:any) => (
                <span key={keyX} className='bg-white px-2 rounded-lg shadow-inner'>{itemX}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
