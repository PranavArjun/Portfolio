import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonBadgeFill } from 'react-icons/bs'

function SocialLinks() {

    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={27} />
                </>
            ),
            href: 'https://www.linkedin.com/in/pranav-arjun-52454b190/',
            style: 'rounded-tr-md'
        },

        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={27} />
                </>
            ),
            href: 'https://github.com/PranavArjun'
        },

        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={27} />
                </>
            ),
            href: "mailto:pranavarjun14@gmail.com"
        },

        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonBadgeFill size={27} />
                </>
            ),
            href: './Pranav_Resume.pdf',
            style: 'rounded-br-md',
            download: true,
        }
    ]


    return (
        <div className=' hidden lg:flex  flex-col top-[35%] left-0 fixed'>
            <ul>
                {links.map(({ id, child, href, style, download }) => (
                    <li key={id} className={`flex justify-between items-center w-40 h-12 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}>
                        <a href={href} className='flex justify-between items-center w-full text-white' download={download} target='_blank' rel='noreferrer'>
                            {child}
                        </a>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default SocialLinks
