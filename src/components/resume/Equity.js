import React from 'react'
import { motion } from 'framer-motion'
import ResumeCard from './ResumeCard'

const Skills = () => {
    return (
        <motion.div 
            initial={{opacity:0}} 
            animate={{opacity:1, transition:{duration:.5}}}
            className='w-full flex gap-20'
        >
                <div className='w-1/2'>
                    <div className='py-12 font-titleFont'>
                        <p className="text-sm text-designColor tracking-[4px]">Features</p>
                        <h2 className="text-4xl font-bold">Design Skills</h2> 
                    </div>


                    <div className='className="mt-14 w-full' >
                        <p className="text-sm uppercase font-medium">

                            <div className='flex items-center justify-between'>
                                <div>testing</div>
                                <div>90%</div>
                            </div>    
                        </p> 
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <span className='w-full h-full bg-gradient-to-r
                                 from-blue-600 via-pink-500 to-red-500 rounded-md'>
                            </span>
                        </span>
                    </div>
                    <div className='className="mt-14 w-full' >
                        <div>
                            <p className="text-sm uppercase font-medium">Photoshot</p>
                            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                                <span className='absolute'>100</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='w-1/2'>
                    <div className='py-12 font-titleFont'>
                        <p className="text-sm text-designColor tracking-[4px]">Features</p>
                        <h2 className="text-4xl font-bold">Development Skill</h2> 
                    </div> 
                    <div className='className="mt-14 w-full' >
                        
                    </div>
                </div>
                
    </motion.div>
    )
}

export default Skills