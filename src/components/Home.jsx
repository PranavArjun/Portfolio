import React from 'react'
import Myimg from "../images/myphoto.jpeg"
import { MdOutlineFileDownload } from "react-icons/md";

function Home() {
    return (
        <div name="home" className=' w-full bg-gradient-to-b from-black via-black to-gray-800 md:pt-40 pt-24 md:pb-9 '>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center
             h-full px-4 py-6 md:py-0 md:flex-row'>
                <div className=' flex flex-col justify-center h-full md:mr-5'>
                    <h2 className=' text-4xl sm:text-7xl font-bold text-white'>I'm a Software Engineer</h2>
                    <p className=' text-gray-500 py-4 max-w-md'>

                        Skilled in Java, Full-Stack Development, Next.js, React.js, HTML, Web Applications, and CSS. Proficient in designing and developing efficient and scalable solutions. Experienced in building user-friendly applications with a keen understanding of modern web technologies. Holds a Bachelor of Engineering (BE) in Electronic and Telecommunication Engineering, with a CGPA of 9.
                    </p>

                    <div className='flex flex-col justify-center items-center pt-4 '>
                        <a download={true} target='_blank' rel='noreferrer' href={'./Pranav_Resume.pdf'} className='group text-white w-fit px-6 py-3 my-2
                         flex items-center rounded-md bg-gradient-to-r from-cyan-500
                          to-blue-500 cursor-pointer text-lg'>
                            Download Resume
                            <span className=' ml-1 '>
                                <MdOutlineFileDownload size={25} className='ml-1' />
                            </span>
                        </a>

                    </div>
                </div>

                <div>
                    <img src={Myimg} alt="Pranav Arjun"
                        className='rounded-2xl m-auto w-2/3   md:ml-20 mt-7 md:mt-0' />
                </div>
            </div>
        </div>
    )
}

export default Home
