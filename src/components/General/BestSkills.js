import React from 'react'
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const BestSkills = ( {text} ) => {
    return (
        <div>
            <h2 className="text-secondaryText dark:text-darkSecondaryText
                    uppercase font-titleFont mb-4">
                Best Skills In
            </h2>
            <div className="flex gap-4">
                <span className="bannerIcon">
                    <FaReact />
                </span>
                <span className="bannerIcon">
                    <SiNextdotjs />
                </span>
                <span className="bannerIcon">
                    <SiTailwindcss />
                </span>
                <span className="bannerIcon">
                    <SiFigma />
                </span>
            </div>
        </div>
    )
}

export default BestSkills