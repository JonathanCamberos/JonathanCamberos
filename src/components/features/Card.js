import React from 'react'
import { HiArrowRight } from "react-icons/hi";
import Title from '../../components/layouts/Title';

const Card = ( { title, des, icon }) => {
    return (
            <div className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne
                flex items-center bg-gradient-to-r 
                from-bodyColor to-[#202327]
                hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024]
                dark:from-darkSecondaryDesignColor dark:to-darkSecondaryDesignColor
                dark:hover:from-darkSecondaryDesignColor dark:hover:to-[#ffffff]
                transition-colors duration-100 group"
            >
                <div className='h-72 overflow-y-hidden'>                    
                   <div className="flex h-full flex-col gap-8 translate-y-16
                                group-hover:translate-y-0 transition-transform duration-500">
                        <div className="w-10 h-8 flex flex-col justify-between">
                            {
                                icon?(<span className="text-5xl text-designColor 
                                    dark:text-darkDesignColor">
                                            {icon}
                                        </span>):
                                (
                                    <>
                                    <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                                    <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                                    <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                                    <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                                    </>
                                )
                            }
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h2 className="text-xl lgl:text-2xl font-titleFont 
                                font-bold text-gray-300 dark:text-darkSecondaryText">
                                {title}
                            </h2>
                            <p className="base dark:text-darkSecondaryText">{des}</p>
                            <span className="text-2xl text-designColor
                                        dark:text-darkSecondaryText">
                                <HiArrowRight />
                            </span>
                        </div>
                  
                    
                    </div>
                </div> 
            </div>    
    )
}

export default Card