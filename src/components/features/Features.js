import React from 'react'
import { AiFillAppstore, AifFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaBars } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";

import Title from '../../components/layouts/Title'
import Card from './Card'

const Features = () => {
    return (
        <section id="features" 
                className="w-full py-20 border-b-[1px] border-b-black"
        >
            <Title title="Features" des="What I Do"/>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                gap-6 lgl:gap-20'>
                <Card 
                    title="Full Stack Web Development"
                    des="Design custom applications for Non-Profit Equity in Tech Organizations " 
                    icon={<AiFillAppstore/>}
                />
                <Card 
                    title="Database Management"
                    des="Manage current systems and ease upgrade organizational upgrades to newest technologies" 
                    icon={<SiProgress/>}
                />
                <Card 
                    title="Mobile Development"
                    des="Personal applications to expand personal toolbelt" 
                    icon={<FaMobile/>}
                />
            </div>
            
        </section>
    )
}

export default Features