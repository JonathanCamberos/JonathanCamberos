import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import FindMeIcons from "../General/FindMeIcons"
import BestSkills from "../General/BestSkills"

const LeftBanner = (theme) => {
    const [text] = useTypewriter({
        words: ["Software Developer.", "Full Stack Developer.", "UI Designer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });

    return (
        <div className='w-full lgl:w-1/2 flex flex-col gap-20'>
                <div className='flex flex-col gap-5'>
                    <h1 className="text-6xl font-bold text-titleText
                        dark:text-darkLightText"> 
                        Hi! I'm {" "}
                        <span 
                            className="text-designColor capitalize
                                    dark:text-darkDesignColor"> 
                             Jonathan Camberos
                        </span>
                    </h1>
                    <h2 className="text-4xl font-bold text-titleText
                        dark:text-darkLightText">
                        a
                        <span> {text}</span>

                        { !theme && ( 
                            <Cursor
                            cursorBlinking="false"
                            cursorStyle="|"
                            // cursorColor="#6f5fdb"
                            cursorColor="#03fc7b"
                            />
                        )}
                        { theme && ( 
                            <Cursor
                            cursorBlinking="false"
                            cursorStyle="|"
                            cursorColor="#6f5fdb"
                            />
                        )}
                        
                    </h2>
                    <p 
                        className="text-secondaryText font-bodyFont leading-6 
                                tracking-wide dark:text-darkSecondaryText">
                        Welcome to my web portfolio! Here are side-projects I have work on teams with or personally designed and developed
                    </p>
                </div>
                <div className='flex flex-col lg:flex-row gap-6 lg:gap-2 justify-between gap-20'>
                    <div>
                        <FindMeIcons text={true}/>
                    </div>
                    <div>
                        <BestSkills />
                    </div>
    


                </div>
            
            </div>
    )
}

export default LeftBanner