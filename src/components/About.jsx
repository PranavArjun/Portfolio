import React from 'react'

const About = () => {
  return (
    <div name = "about" className=' w-full bg-gradient-to-b from-gray-800
     to-black text-white pt-24 '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
         justify-center w-full items-center  '>

            <div className=''>
                <p className='text-4xl font-bold inline border-b-4 
                 border-gray-500'>
                        About
                </p>
            </div>

            <p className='text-xl mt-16 text-justify px-3'>
            I am a dedicated software developer specializing in full-stack web development, proficient in technologies such as NextJs, ReactJS, HTML, CSS, JavaScript, Java and Django. My academic background in Electronics and Telecommunication Engineering from AISSMS Engineering College, where I graduated with distinction (9 CGPA).
            </p>

            <br />
            <p className='text-xl text-justify px-3'>
            I possess a diverse skill set encompassing both frontend and backend technologies essential for modern web development. I have developed several projects, including Anonymous Messages, a platform that allows users to send anonymous messages to others, and an Auth Flow system for secure authentication. Both projects were built using Next.js, React.js, and MongoDB.
            </p>
            <br />
            <p className='text-xl text-justify px-3'>
            Currently, I am gaining valuable experience at Cognizant, where I contribute to the development of innovative software solutions. My proficiency in Next.js and React.js allows me to create dynamic and user-friendly web applications, showcasing my ability to design and implement end-to-end solutions.
            </p>
            <br />
            <p className=' text-xl text-justify px-3'>
            I am enthusiastic about continuous learning and staying updated with emerging technologies in the software development landscape. My goal is to leverage my technical skills and problem-solving abilities to make meaningful contributions in the field of web development.
            </p>

        </div>
    </div>
  )
}

export default About
