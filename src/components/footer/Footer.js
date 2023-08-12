import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index"
import FindMeIcons from '../General/FindMeIcons';
import ApartmentAnimation from './AppartmentAnimation';
import SkyAnimation from './SkyAnimation'

const Footer = () => {
    return (
        <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid
            grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className='w-full h-full flex flex-col gap-8'>
                <img className='w-32' src={logo} alt="logo" />
                <FindMeIcons text={false}/>
            </div>
            <div className='w-full h-full'>
                <h3 className='text-xl uppercase text-designColor tracking-wider'>
                    Quick Link
                </h3>
                <ul className='flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden'>
                    <a href="https://www.google.com" target="_blank">
                        <li>
                            <span 
                                className='w-full text-lg hover:text-designColor duration-300 
                                cursor-pointer relative group'
                        >
                                About 
                                <span 
                                    className='absolute h-[1px] w-full inline-flex bg-designColor
                                        -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
                                        transition-transform duration-300 '> 
                                </span>
                            </span> 
                        </li>
                    </a>
                    <li>
                        <span 
                            className='w-full text-lg hover:text-designColor duration-300 
                            cursor-pointer relative group'
                    >
                            About 
                            <span 
                                className='absolute h-[1px] w-full inline-flex bg-designColor
                                    -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
                                    transition-transform duration-300 '> 
                            </span>
                        </span> 
                    </li>
                    <li>
                        <span 
                            className='w-full text-lg hover:text-designColor duration-300 
                            cursor-pointer relative group'
                    >
                            About 
                            <span 
                                className='absolute h-[1px] w-full inline-flex bg-designColor
                                    -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
                                    transition-transform duration-300 '> 
                            </span>
                        </span> 
                    </li>
                </ul>
            </div>
            <div className='w-full h-20'>
                <SkyAnimation />
            </div>
            <div className='w-full h-full'>
                <ApartmentAnimation />
            </div>
            {/* <div className='w-full h-full'>
            <h3 className='text-xl uppercase text-designColor tracking-wider'>
                    Quick Link
                </h3>
                <ul className='flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden'>
                    <li>
                        <span 
                            className='w-full text-lg hover:text-designColor duration-300 
                            cursor-pointer relative group'
                    >
                            About 
                            <span 
                                className='absolute h-[1px] w-full inline-flex bg-designColor
                                    -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
                                    transition-transform duration-300 '> 
                            </span>
                        </span> 
                    </li>
                    <li>
                        <span 
                            className='w-full text-lg hover:text-designColor duration-300 
                            cursor-pointer relative group'
                    >
                            About 
                            <span 
                                className='absolute h-[1px] w-full inline-flex bg-designColor
                                    -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
                                    transition-transform duration-300 '> 
                            </span>
                        </span> 
                    </li>
                    <li>
                        <span 
                            className='w-full text-lg hover:text-designColor duration-300 
                            cursor-pointer relative group'
                    >
                            About 
                            <span 
                                className='absolute h-[1px] w-full inline-flex bg-designColor
                                    -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
                                    transition-transform duration-300 '> 
                            </span>
                        </span> 
                    </li>
                </ul>
            </div>
            <div className='w-full h-full'>
            <h3 className='text-xl uppercase text-designColor tracking-wider'>
                    Quick Link
                </h3>
                <ul className='flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden'>
                    <li>
                        <span 
                            className='w-full text-lg hover:text-designColor duration-300 
                            cursor-pointer relative group'
                    >
                            About 
                            <span 
                                className='absolute h-[1px] w-full inline-flex bg-designColor
                                    -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
                                    transition-transform duration-300 '> 
                            </span>
                        </span> 
                    </li>
                    <li>
                        <span 
                            className='w-full text-lg hover:text-designColor duration-300 
                            cursor-pointer relative group'
                    >
                            About 
                            <span 
                                className='absolute h-[1px] w-full inline-flex bg-designColor
                                    -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
                                    transition-transform duration-300 '> 
                            </span>
                        </span> 
                    </li>
                    <li>
                        <span 
                            className='w-full text-lg hover:text-designColor duration-300 
                            cursor-pointer relative group'
                    >
                            About 
                            <span 
                                className='absolute h-[1px] w-full inline-flex bg-designColor
                                    -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
                                    transition-transform duration-300 '> 
                            </span>
                        </span> 
                    </li>
                </ul> 
            </div> */}
        </div>
    )
}

export default Footer