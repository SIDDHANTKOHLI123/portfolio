import React from 'react'
import springboot from '../assets/portfolio/springboot.jpg'
import wordle from '../assets/portfolio/wordle2.jpg'
import sqlserver from '../assets/portfolio/sqlsever.jpg'
import sqlpower from '../assets/portfolio/sqlpower.jpg'
import aws from '../assets/portfolio/aws.jpg'
import mern from '../assets/portfolio/Mern.png'
import javaswing from '../assets/portfolio/java.jpg'
import pythonvirtual from '../assets/portfolio/virtualassistant.jpg'

const Portfolio = () => {
        const portfolios=[
            {
                id:1,
                src:springboot,
                projectLink:"https://github.com/SIDDHANTKOHLI123/Projects-/tree/main/NuworksSpringBoot"
            },
            {
                id:2,
                src:wordle,
                projectLink:"https://github.com/SIDDHANTKOHLI123/Projects-/tree/main/wordleproject"
            },
            {
                id:3,
                src:sqlpower,
                projectLink:"https://github.com/SIDDHANTKOHLI123/Projects-/tree/main/ElevatorManagementSystem%20-%20SQL%20Server"
            },
            {
                id:4,
                src:aws,
                projectLink:"https://github.com/SIDDHANTKOHLI123/Projects-/tree/main/infrastructureCloud"
            },
            {
                id:5,
                src:mern,
                projectLink:"https://github.com/SIDDHANTKOHLI123/Projects-/tree/main/CourseRoom%20-%20MERN"
            },
            {
                id:6,
                src:javaswing,
                projectLink:"https://github.com/SIDDHANTKOHLI123/Projects-/tree/main/UrgentHealthCareManagementSystem"
            },        

        ]

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
            <p className="py-6">Check out some of my work here</p>
           
        </div>
        <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

        {
            portfolios.map(({id,src,projectLink})=>(
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
            <div className="flex items-center justify-center">
                <button type="button" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={(e) => {
                    e.preventDefault();
                    window.open(projectLink, '_blank');
                }}>Code</button>
                {/*<button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>*/}
            </div>
            </div>
            
            ))
        }
        
        </div>
        </div>
        </div>
  )
}

export default Portfolio