import React, { useState } from 'react'
import Title from '../layouts/Title'
import Experience from './Experience'
import Education from './Education'
import Equity from './Equity'
import About from './About'


const Resume = () => {

    const [experienceData, setExperienceData] = useState(true)
    const [educationData, setEducationData] = useState(false)
    const [equityData, setEquityData] = useState(false)
    const [aboutData, setAboutData] = useState(false)

    return (
        <section 
            id="resume" 
            className="w-full py-20 border-b-[1px] border-b-black"
        >   
            <div className='flex justify-center items-center text-center'>
                
                { experienceData && (
                    <Title
                        title="2+ YEARS OF EXPERIENCE"
                        des="My Resume"
                    />
                )}
                { educationData && (
                    <Title
                        title="University Coursework"
                        des="My Resume"
                    />
                ) }
                { equityData && (
                    <Title
                        title="Giving back and paying foward"
                        des="My Resume"
                    />
                )}
                { aboutData && (
                    <Title
                        title="Interests and  !(code-y stuff)"
                        des="My Resume"
                    />
                )} 
                
            </div>
            <div>
                <ul className="w-full grid grid-cols-1 mdl:grid-cols-2 lg:grid-cols-4">
                    <li
                        onClick={() =>
                            setExperienceData(true) &
                            setEducationData(false) &
                            setEquityData(false) &
                            setAboutData(false)
                        }
                        className={ 
                            `${experienceData ? "bg-green-400" : "border-designColor"}
                            dark:${experienceData ? "bg-indigo-400" : "border-designColor"}
                                resumeLi`
                            }
                            
                    >
                        Experience
                    </li>
                    <li 
                        onClick={() =>
                            setExperienceData(false) &
                            setEducationData(true) &
                            setEquityData(false) &
                            setAboutData(false)
                        }
                        className={ 
                            `${educationData ? "bg-green-400" : "border-designColor"}
                            dark:${educationData ? "bg-indigo-400" : "border-designColor"}
                                resumeLi`
                            }

                    >
                        Education
                    </li>
                    <li 
                        onClick={() =>
                            setExperienceData(false) &
                            setEducationData(false) &
                            setEquityData(true) &
                            setAboutData(false)
                        }
                        className={ 
                            `${equityData ? "bg-green-400" : "border-designColor"}
                            dark:${equityData ? "bg-indigo-400" : "border-designColor"}
                                resumeLi`
                            }
                    >
                        Equity in Tech
                    </li>
                    <li 
                        onClick={() =>
                            setExperienceData(false) &
                            setEducationData(false) &
                            setEquityData(false) &
                            setAboutData(true)
                        }
                        className={ 
                            `${aboutData ? "bg-green-400" : "border-designColor"}
                            dark:${aboutData ? "bg-indigo-400" : "border-designColor"}
                                resumeLi`
                            }
                    >
                        About Me
                    </li>
                </ul>
            </div>
            { experienceData && <Experience />}
            { educationData && <Education />}
            { equityData && <Equity />}
            { aboutData && <About />} 
        </section>
    )
    
}

export default Resume