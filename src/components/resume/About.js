import React from "react"
import { motion } from 'framer-motion'
import Title from '../layouts/Title'
import { AboutMe } from "../../assets/index"

const About = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}}
        className='w-full flex flex-col mdl:flex-row gap-10 lgl:gap-20'
        >
            <section
                    className="w-full py-20">
                <div className="w-full">
                    <div className="w-full h-auto flex flex-col lg:flex-row justify-between">
                        

                        <div className="w-full lg:w-[35%] h-full bg-gradient-to-r 
                        from-[#1e2024] to-[#23272b]
                        dark:from-darkSecondaryDesignColor dark:to-darkSecondaryDesignColor
                        p-4 lg:p-10 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center"
                        >
                            <img 
                                className="w-full h-64 object-cover rounded-lg mb-2"
                                src={AboutMe} 
                                alt="AboutMe"        
                            />
                        </div>

                        <div className="w-full lg:w-[60%] h-full py-10 bg-gradient-to-r 
                            from-[#1e2024] to-[#23272b]
                            dark:from-darkSecondaryDesignColor dark:to-darkSecondaryDesignColor
                            flex flex-col gap-8 p-4 lg:p-8 rounded-lg shadow-shadowOne"
                        >
                            <p className="text-lg font-normal 
                                text-gray-400 dark:text-darkSecondaryText">
                                Hi! Nice to meet you and thanks for taking a peak at my portfolio!
                                My name is Jonathan, a Colombian-American from Maryland,
                                and an avid Software Engineer and Musician!
                            </p>
                            <p className="text-lg font-normal 
                                text-gray-400 dark:text-darkSecondaryText">
                                I began my Software journey at the University of Maryland and have recently 
                                been self-learning web development via tutorials and other skills in my free time (which is what this portfolio is for!)
                                Right now Ive mostly been experimenting with MERN Web apps and am beginning to transition into other stacks.

                                Outside of coding I like to songwrite in my free time. Mostly Indie-folk and things in that area.  
                            </p>
                            <p className="text-lg font-normal 
                                text-gray-400 dark:text-darkSecondaryText">
                                Im currently residing in Denver, Colorado for the summer and been picking up local hobbies like 
                                bouldering, scrambling, among other outdoorsy things.  :) 
                            </p>
                            
                        </div>
                    </div>

                </div>
            </section>
        </ motion.div>
    )
}

export default About