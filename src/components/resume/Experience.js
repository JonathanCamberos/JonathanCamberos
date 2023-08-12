import React from "react"
import { motion } from 'framer-motion'
import ResumeCard from './ResumeCard'

const Experience = () => {
    return (
        <motion.div 
            initial={{opacity:0}} 
            animate={{opacity:1, transition:{duration:.5}}}
            className='w-full flex gap-20'
        >
            <div>
                <div className='py-12 font-titleFont'>
                    <p className="text-sm text-designColor tracking-[4px]">
                        2021-Present
                    </p>
                    <h2 className="text-4xl font-bold">
                        Mentoring
                    </h2> 
                </div>
                <div className='className="mt-14 w-full h-[1000px] border-l-[6px]
                    border-l-black border-opacity-30 flex flex-col gap-10' >     
                    <ResumeCard 
                        title="Program Coordinator"
                        subTitle="UMD - Office of Multi-Ethnic Student Education - CSS - (2023 - Present)"
                        result="4.75/5"
                        des="Higher Education is tertiary education leading to award of an academic 
                            degree. Higher education, also called post-secondary education."
                    />
                    <ResumeCard 
                        title="STEM Summit Mentor"
                        subTitle="Hispanic Scholarship Fund - (2023)"
                        result="5.00/5"
                        des="Secodary education or post-pimrary education covers two phaes on the
                        Internation Standard Classificaiton of Education scale."
                    />
                    <ResumeCard 
                        title="Executive Board"
                        subTitle="UMD - Office of Multi-Ethnic Student Education - CSS - (2022 - 2023)"
                        result="4.75/5"
                        des="Higher Education is tertiary education leading to award of an academic 
                            degree. Higher education, also called post-secondary education."
                    />             
                </div>
            </div>
            <div>
                <div className='py-12 font-titleFont'>
                    <p className="text-sm text-designColor tracking-[4px]">
                        2021-Present
                    </p>
                    <h2 className="text-4xl font-bold">
                        Development
                    </h2> 
                </div>
                <div className='className="mt-14 w-full h-[1000px] border-l-[6px]
                    border-l-black border-opacity-30 flex flex-col gap-10' >
                    <ResumeCard 
                        title="Sr. Software Engineer"
                        subTitle="Google Out Tech - (2017 - Present)"
                        result="USA"
                        des="Google's hiring process is an important part of our culture. Googlers
                            care deeply about their teams and te people who make them up."
                    />
                    <ResumeCard 
                        title="Web Developer & Trainer"
                        subTitle="Apple Developer Team - (2012 - 2016)"
                        result="MALAYSIA"
                        des="A popular destination with a growing number of highly qualified
                            homegrown graduates, it's true that securing a role in Malaysia isn't easy"
                    />
                    <ResumeCard 
                        title="Front-end Developer"
                        subTitle="Nike - (2020 - 2011)"
                        result="Oman"
                        des="The Oman economy has grown strongly over recent years, having transformed
                            itself from a producer and innovation-based company."
                    />
                    
                </div>
            </div>
        
        </motion.div>
    )
}

export default Experience