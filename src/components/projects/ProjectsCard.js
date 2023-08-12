import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src}) => {
    return (
        <div className="w-full p-4 lgl:px-12 h-auto lgl:py-10 rounded-lg shadow-shadowOne
                flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group
                hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900
                dark:from-darkSecondaryDesignColor dark:to-darkSecondaryDesignColor
                dark:hover:from-darkSecondaryDesignColor dark:hover:to-[#ffffff]
                transition-colors duration-1000"
        >
            <div className="w-full h-[80%] overflow-hidden rounded-lg">
                <img 
                    className='w-full h-60 object-cover 
                    group-hover:scale-110 duration-300 cursor-pointer' 
                    src={src} alt="src" />
            </div>
            <div className="w-full mt-5 flex flex-col gap-6">
                <div>
                    <div className='flex items-center justify-between'>
                        <h3 className="text-base uppercase font-normal 
                            text-designColor dark:text-darkDesignColor">
                            {title}
                        </h3>
                        <div className='flex gap-2'>
                        <span className="text-lg w-10 h-10 rounded-full 
                            bg-black dark:bg-white inline-flex
                            justify-center items-center text-gray-400 dark:text-darkSecondaryText
                            hover:text-designColor dark:hover:text-darkDesignColor duration-cursor-pointer">
                               <BsGithub/>
                            </span>
                            <span className="text-lg w-10 h-10 rounded-full 
                            bg-black dark:bg-white inline-flex
                            justify-center items-center text-gray-400 dark:text-darkSecondaryText
                            hover:text-designColor dark:hover:text-darkDesignColor duration-cursor-pointer">
                                <FaGlobe/>
                            </span>
                        </div>
                    </div>
                    <p className="text-sm tracking-wide dark:text-darkSecondaryText
                            mt-3 hover:text-gray-100 duration-100">
                        {des}
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default ProjectsCard