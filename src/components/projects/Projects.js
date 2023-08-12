import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from '../projects/ProjectsCard'
import { projectOne, projectTwo, projectThree } from '../../assets/index'

const Projects = () => {
    return (
        <section id="projects" 
                className="w-full py-20 border-b-[1px] border-b-black"
        >   
            <div className='flex justify-center items-center text-center'>
                <Title
                title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
                des="My Projects"
                />
            </div>
            <div className='grid grid-cols-1 mdl:grid-cols-2 lgl:grid-cols-3 gap-14'>
                <ProjectsCard
                    title="Social Media Clone"
                    des="Loren something something soemthing Loren something something soemthing 
                    Loren something something soemthing Loren something something soemthing " 
                    src={projectOne}
                />
                <ProjectsCard
                    title="E-commerce Website"
                    des="Loren something something soemthing Loren something something soemthing 
                    Loren something something soemthing Loren something something soemthing " 
                    src={projectTwo}
                />
                <ProjectsCard
                    title="Chatting App"
                    des="Loren something something soemthing Loren something something soemthing 
                    Loren something something soemthing Loren something something soemthing " 
                    src={projectThree}
                />
            </div>
            
        </section>
    )
}

export default Projects