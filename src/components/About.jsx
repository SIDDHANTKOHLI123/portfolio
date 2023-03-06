import React from 'react'

const About = () => {

    const description =[
        {
            id:1,
            para:"I also go by Full Stack Developer, Front-End Developer, or Back-End Developer."
        },
        {
            id:2,
            para:" With all that said, I don’t like to just define myself by the work I’ve done. My inspiration is boundless, it fuels me in the pursuit of cultivating new skills. My ability to juggle different projects and roles with relative ease is the key to my success."
        },
        {
            id:3,
            para:"Over the course of my life and career I have developed expertise in several areas of web development and design. I am seeking to continue this growth by opening myself for opportunities which are guaranteed to challenge me."
        },
        {
            id:4,
            para:"You can review my latest work in my Portfolio and read more about my biography, experience, skills, education and much more from my resume in the left navigation bar."
        },
    ];

  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white ">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-400">About</p>
            </div>
            <p className="text-2xl mt-8 ">
            Hi, I’m Siddhant. An avid sports lover, adventurous traveler, and dog-lover.
            </p>
            {description.map(({id,para}) =>(
                <p key={id} className="text-xl mt-5 ">{para}</p>
            ))}
        </div>
    </div>
  )
}

export default About