import React from 'react'
import cssimg from '../images/css.png'
import djangoimg from '../images/DjangoLogo.png'
import gitimg from '../images/github.png'
import htmlimg from '../images/html.png'
import javaimg from '../images/JAVA.png'
import javascriptimg from '../images/javascript.png'
import nextjsimg from '../images/nextjs.png'
import nodeimg from '../images/node.png'
import reactimg from '../images/react.png'
import tailwindimg from '../images/tailwind.png'
import bootstrapimg from '../images/bootstrap.png'
import mysqlimg from '../images/mysql.png'


const TechnicalSkills = () => {

    const techskill = [
        {
            id : 1, 
            scr : javaimg,
            tech : "Java",
            style : 'shadow-red-600'
        },
        {
            id : 2, 
            scr : nextjsimg,
            tech : "NextJS",
            style : 'shadow-gray-400'
        },
        {
            id : 3, 
            scr : reactimg,
            tech : "React Js",
            style : 'shadow-blue-600'
        },
        
        {
            id : 4, 
            scr : nodeimg,
            tech : "Node Js",
            style : 'shadow-lime-400'
        },
        {
            id : 5, 
            scr : htmlimg,
            tech : "HTML",
            style : 'shadow-orange-500'
        },
        {
            id : 6, 
            scr : cssimg,
            tech : "CSS",
            style : 'shadow-blue-600'
        },
        {
            id : 7, 
            scr : javascriptimg,
            tech : "JavaScript",
            style : 'shadow-yellow-500'
        },
        {
            id : 8, 
            scr : djangoimg,
            tech : "Django",
            style : 'shadow-green-600'
        },
        {
            id : 9, 
            scr : mysqlimg,
            tech : "Mysql",
            style : 'shadow-blue-600'
        },
        
        {
            id : 10, 
            scr : tailwindimg,
            tech : "Tailwind",
            style : 'shadow-sky-400'
        },

        {
            id : 11, 
            scr : bootstrapimg,
            tech : "BootStrap",
            style : 'shadow-violet-600'
        },
        
        {
            id : 12, 
            scr : gitimg,
            tech : "GitHub",
            style : 'shadow-gray-400'
        },
        
    ]

  return (
    <div name="techskills" className=' bg-gradient-to-b from-gray-800
     to-black w-full pt-24 '>

        <div className=' max-w-screen-lg mx-auto p-4 flex flex-col
         justify-center w-full text-white items-center  h-full'>

            <div className=' pb-10'>
                <p className=' text-4xl font-bold border-b-4 
                 border-gray-500 p-2 inline'>
                    Technical Skills 
                </p>
            </div>

            <div className=' w-full grid grid-cols-2 sm:grid-cols-3 gap-8
             text-center py-8 px-12 sm:px-0'>

                {techskill.map(({id,scr,tech,style})=>(
                    <div key={id} className= {`shadow-md hover:scale-105
                     duration-500 py-2 rounded-lg ${style}`}>

                        <img src={scr} alt="Skills" className=' w-20 mx-auto h-2/3 ' />
                        <p className='mt-4'>{tech}</p>

                    </div>
                ))}


            </div>

        </div>
      
    </div>
  )
}

export default TechnicalSkills
