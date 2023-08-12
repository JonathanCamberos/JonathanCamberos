import React from 'react'
import {FaLinkedinIn } from "react-icons/fa"
import { BsGithub, BsInstagram } from "react-icons/bs";

const FindMeIcons = ( {text} ) => {
    return (
        <div>
            <div className='text-secondaryText uppercase 
                    dark:text-darkSecondaryText font-titleFont mb-4'>
                {
                    text && (
                        <h2 className='text-base uppercase font-titleFont mb-4'>
                            Find me in
                        </h2>
                    ) 
                }
                    


                    <div className='flex gap-4'>
                        
                        <a href="https://www.linkedin.com/in/jonathan-camberos-dav/" target="_blank" rel="noopener noreferrer">
                            <span className='bannerIcon'>
                                <FaLinkedinIn />
                            </span>
                        </a>
                        <a href="https://github.com/JonathanCamberos" target="_blank" rel="noopener noreferrer">
                            <span className='bannerIcon'>
                                <BsGithub />
                            </span>
                        </a>
                        <a href="https://www.instagram.com/jonathan_camberos/" target="_blank" rel="noopener noreferrer">
                            <span className='bannerIcon'>
                                <BsInstagram />
                            </span>
                        </a>  
                          
                    </div>
            </div>
        </div>
    )
}

export default FindMeIcons