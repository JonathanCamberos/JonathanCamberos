import React from 'react';
import Title from '../layouts/Title'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"
import { Html, CSS, JavaScript, 
        React2, Tailwind, NextJs, Java, GitHub } from "../../assets/index"


const Experience = () => {
    const techs = [
        {
            id: 1,
            src: Html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: CSS,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: JavaScript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: React2,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: Tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: NextJs,
            title: 'Next JS',
            style: 'shadow-white'
        },
        {
            id: 7,
            src: Java,
            title: 'Java',
            style: 'shadow-pink-400'
        },
        {
            id: 8,
            src: GitHub,
            title: 'GitHub',
            style: 'shadow-gray-400'
        }
    ]

    return  (
        <section id="experience" 
                className="w-full py-20 border-b-[1px] border-b-black"
        >   
            <div className='flex-col justify-center items-center text-center'
            >
                <div>
                    <Title
                    title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
                    des="My Experience"
                    />
                </div>
                
                <div>
                    <div className='w-full grid grid-cols-2 sm:grid-cols-3
                    gap-8 text-center py-8 px-12 sm:px-0'
                    >

                        {
                            techs.map(({id, src, title, style}) => (
                                <div 
                                key={id}
                                className={`shadow-md hover:scale-105 duration-500
                                py-2 rounded-lg ${style}
                                dark:bg-gradient-to-t dark:from-darkSecondaryDesignColor`}
                                >
                                    <img 
                                        className="w-20 mx-auto"
                                        src={src} 
                                        alt=""        
                                    />
                                    <p className='mt-4 dark:text-darkSecondaryText'>{title}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                
            </div>
            
            
            
        </section>
    )
}

export default Experience