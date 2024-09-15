import React, { useState } from 'react'
import livetracker from '../images/LiveTracker.png'
import Examcorner from '../images/ExamCorner.png'
import Foodcorner from '../images/FoodCorner.png'
import Gunoxi from '../images/Gunoxi .png'
import Textutils from '../images/TextUtils.png'
import anonymus_messages from '../images/anonymus-messages.png'
import authflow from '../images/authflow.png'
import todolist from '../images/todolist.png'
import passgenerator from '../images/password-generator.png'
import currencyconverter from '../images/currency-conveter.png'

function Projects() {


    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const handleModalClose = () => {
        setSelectedProject(null);
    };

    const handleOverlayClick = (e) => {
        // Check if the click target is the overlay itself
        if (e.target.classList.contains('modal-overlay')) {
            handleModalClose();
        }
    };

    const project = [

        {
            id: 1,
            name: 'Anonymous Messages',
            scr: anonymus_messages,
            btn1: 'Overview',
            btn2: 'GitHub',
            gitlink: 'https://github.com/PranavArjun/Anonymous-Messages-and-FeedBack',
            overview: <div className="max-w-md mx-auto p-4">
                <ol className="list-disc list-outside space-y-2">
                    <li>This is a full-stack web application developed using Next.js, React.js, and MongoDB.</li>
                    <li>The app allows users to send and receive anonymous messages and feedback.</li>
                    <li>Implemented AuthJS for secure authentication.</li>
                    <li>Users can share their profile links, enabling others to send them anonymous messages without needing to create an account.</li>
                    <li>Utilized the Zod library for schema validation, ensuring data integrity and error handling.</li>
                    <li>Built a user-friendly interface with shadcn.</li>
                </ol>
            </div>
        },
        {
            id: 2,
            name: 'AuthFlow',
            scr: authflow,
            btn1: 'Overview',
            btn2: 'GitHub',
            gitlink: 'https://github.com/PranavArjun/Login-App-Using-NextJS',
            overview: <div className="max-w-md mx-auto p-4">
                <ol className="list-disc list-outside space-y-2">
                    <li>Created a web application using Next.js, React.js, and MongoDB focused on user authentication.</li>
                    <li>Implemented core login and logout functionality.</li>
                    <li>Implemented email verification to ensure secure and validated user accounts.</li>
                </ol>
            </div>
        },

        {
            id: 3,
            name: 'Live Tracker',
            scr: livetracker,
            btn1: 'Overview',
            btn2: 'GitHub',
            gitlink: 'https://github.com/PranavArjun/Live_Tracker',
            overview: <div className="max-w-md mx-auto p-4">
                <ol className="list-disc list-outside space-y-2">
                    <li>Developed a web application for Live Tracking system for delivery packages.</li>
                    <li>Built this Web Application using Django Framework.</li>
                    <li>Utilized HTML, CSS, and Bootstrap to create a user-friendly frontend.</li>
                    <li>Stored the data in a MySQL Database.</li>
                </ol>
            </div>
        },
        {
            id: 4,
            name: 'Todo-List',
            scr: todolist,
            btn1: 'Overview',
            btn2: 'WebPage',
            gitlink: 'https://pranavarjun.github.io/Todo-Using-React-JS/',
            overview: <div className="max-w-md mx-auto p-4">
                <ol className="list-disc list-outside space-y-2">
                    <li>Built a To-Do List application using React.js.</li>
                    <li>Features include adding, deleting, and marking tasks as complete.</li>
                    <li>Implemented Context API and used local storage to persist tasks across sessions.</li>
                </ol>
            </div>
        },
        {
            id: 5,
            name: 'Text Utils',
            scr: Textutils,
            btn1: 'Overview',
            btn2: 'WebPage',
            gitlink: 'https://pranavarjun.github.io/TextUtils/',
            overview: <div className="max-w-md mx-auto p-4">
                <ol className="list-disc list-outside space-y-2">
                    <li>Developed a web application to manipulate text easily.</li>
                    <li>Implemented features to convert text to uppercase/lowercase, count characters, and remove extra spaces.</li>
                    <li>Used React.js for frontend development.</li>
                    <li>Applied CSS for styling and JavaScript for interactivity.</li>
                </ol>
            </div>
        },
        {
            id: 6,
            name: 'Currency Converter',
            scr: currencyconverter,
            btn1: 'Overview',
            btn2: 'WebPage',
            gitlink: 'https://pranavarjun.github.io/Currency-Converter-Using-React-JS/',
            overview: <div className="max-w-md mx-auto p-4">
                <ol className="list-disc list-outside space-y-2">
                    <li>Developed a currency converter application using React.js.</li>
                    <li>Integrated an API to fetch real-time currency conversion rates.</li>
                    <li>Allows users to convert currencies to their desired ones with accurate and up-to-date exchange rates.</li>
                </ol>
            </div>
        },
        {
            id: 7,
            name: 'Password Generator',
            scr: passgenerator,
            btn1: 'Overview',
            btn2: 'WebPage',
            gitlink: 'https://pranavarjun.github.io/Password-Generator-Using-React-JS/',
            overview: <div className="max-w-md mx-auto p-4">
                <ol className="list-disc list-outside space-y-2">
                    <li>Created a password generator using React.js.</li>
                    <li>Allows users to select the length of the password and toggle inclusion of numbers and special characters.</li>
                    <li>Users can customize their password with various options for stronger security.</li>
                </ol>
            </div>
        },
        
        {
            id: 8,
            name: 'Exam Corner',
            scr: Examcorner,
            btn1: 'Overview',
            btn2: 'GitHub',
            gitlink: 'https://github.com/PranavArjun/Exam-Corner-Components',
            overview: <div className="max-w-md mx-auto p-4">
                <ol className="list-disc list-outside space-y-2">
                    <li>This website is used for downloading University Question Papers of previous years .</li>
                    <li>For this website we are using ReactJS, NodeJS , MongoDB and ExpressJS, (MERN Stack) .</li>
                    <li>User friendly website for getting access to study materials and question papers .</li>
                </ol>
            </div>
        },
        {
            id: 9,
            name: ' Gunoximeter',
            scr: Gunoxi,
            btn1: 'Overview',
            btn2: 'GitHub',
            gitlink: 'https://github.com/PranavArjun/Gun_Oximeter',
            overview: <div className="max-w-md mx-auto p-4">
                <ol className="list-disc list-outside space-y-2">
                    <li>Build prototype hardware for measuring both temperature and oxygen using Ardunio .</li>
                    <li>Using Django web application we stored the data of sensors in MySQL database .</li>
                    <li>Interface the Hardware and Software using Arduino Python Library .</li>
                    <li> Published research paper titled IOT based Temperature and Oxygen level monitoring and Data Visualization in IEEE Xplore library .</li>
                </ol>
            </div>
        },
        
        {
            id: 10,
            name: 'Food Corner',
            scr: Foodcorner,
            btn1: 'Overview',
            btn2: 'GitHub',
            gitlink: 'https://github.com/PranavArjun/TextUtils',
            overview: <div className="max-w-md mx-auto p-4">
                <ol className="list-disc list-outside space-y-2">
                    <li>Created a web application showcasing a food corner with various sections for a delightful user experience.</li>
                    <li>Developed using HTML and CSS to design and style the frontend user interface.</li>
                    <li>Implemented different sections to display menus, promotions, contact information, and more.</li>
                </ol>
            </div>
        },

    ]

    return (
        <div name="projects" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:pt-24'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-24 sm:pt-0'>
                <div className='pb-10 flex flex-col justify-center items-center'>
                    <p className='text-4xl font-bold inline border-b-4 border-x-gray-500'>
                        Projects
                    </p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-12 px-12 sm:px-0'>
                    {project.map((project) => (
                        <div key={project.id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={project.scr} alt="Project" className='rounded-md h-2/3 w-full' />

                            <div className='flex items-center justify-center'>
                                <button
                                    onClick={() => handleProjectClick(project)}
                                    className='px-6 py-3 m-4 duration-200 hover:scale-105 hover:cursor-pointer'
                                >
                                    {project.btn1}
                                </button>

                                <a
                                    href={project.gitlink}
                                    target='_blank'
                                    rel='noreferrer'
                                    className=' px-6 py-3 m-4 duration-200 hover:scale-105 hover:cursor-pointer'
                                >
                                    {project.btn2}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Overlay for Project Details */}
            {selectedProject && (
                <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center modal-overlay' onClick={handleOverlayClick}>
                    <div className='bg-white p-4 rounded-lg max-w-md'>
                        <button className='absolute top-4 right-4 text-gray-600 hover:text-gray-800' onClick={handleModalClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <h2 className='text-xl font-bold text-gray-800 mb-2  text-center'>{selectedProject.name}</h2>
                        <div className='text-sm text-gray-700 overflow-y-auto max-h-60'>{selectedProject.overview}</div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Projects
