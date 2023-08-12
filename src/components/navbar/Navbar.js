import React, { useState } from 'react'
import { Link } from "react-scroll"
import { FiMenu } from "react-icons/fi";
import { motion } from 'framer-motion'
import { logo, darkLogo } from "../../assets/index"
import { MdClose } from "react-icons/md";
import { navLinksdata } from "../../constants"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaRegMoon, FaSun } from "react-icons/fa"


const Navbar = props => {
    console.log(props)
    const [showMenu, setShowMenu] = useState(false)
    return(

        // sticky: keeps it on screen while scrolling down
        <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor 
            dark:bg-white mx-auto px-8 flex justify-between items-center
             font-titleFont border-b-[1px] border-b-gray-600 "
        >   
            <div>
                <Link
                    activeClass="active"
                    to={navLinksdata[0].link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    {
                        !props.theme && (
                            <img 
                            src={logo} 
                            alt="logo"
                            className="h-18 w-32"
                        />
                        )
                    }
                    {
                        props.theme && (
                            <img 
                            src={darkLogo} 
                            alt="darkLogo"
                            className="h-18 w-32"
                        />
                        )
                    }
                    
                </Link>
                
            </div>
            <div>
                <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
                    {
                        navLinksdata.map(({ _id, title, link }) => (
                            <li 
                                key={_id}
                                className="text-base font-normal text-gray-400 
                                dark:text-darkSecondaryText dark:hover:text-darkDesignColor
                                tracking-wide 
                                cursor-pointer hover:text-designColor duration-300"
                            >
                                <Link
                                    activeClass="active"
                                    to={link}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    {title}
                                </Link>
                                
                            </li>
                        ))
                    }
                </ul>
                <span onClick={()=>setShowMenu(!showMenu)}
                    className='text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center
                    justify-center rounded-full text-designColor cursor-pointer'>
                    <FiMenu />
                </span>
                {
                    showMenu && (
                        <div className="w-[80%] h-screen overflow-scroll absolute top-0
                            left-0 bg-gray-900 p-4 scrollbar-hide">
                            <div className='flex flex-col gap-8 py-2 relative'>
                                <div >
                                    <img className='w-32' src={logo} alt="logo" />
                                    <p className='text-sm text-gray-400 mt-2'>
                                        Lorem something something something something 
                                        Lorem something something something something Lorem something something something something 
                                        Lorem something something something something Lorem something something something something 
                                        Lorem something something something something Lorem something something something something 
                                        Lorem something something something something 
                                    </p>
                                </div>
                                <ul className='flex flex-col gap-4'>
                                    {
                                        navLinksdata.map((item)=>(
                                            <li
                                                key={item._id}
                                                className="text-base font-normal text-gray-400 tracking-wide 
                                                cursor-pointer hover:text-designColor duration-300"
                                            >
                                                <Link
                                                    onClick={()=>setShowMenu(false)}
                                                    activeClass="active"
                                                    to={item.link}
                                                    spy={true}
                                                    smooth={true}
                                                    offset={-70}
                                                    duration={500}
                                                >
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <div className='flex flex-col gap-4'>
                                    <h2 className='text-base uppercase font-titleFont mb-4'>
                                        Find me in
                                    </h2>
                                    <div className='flex gap-4'>
                                        <span className='bannerIcon'>
                                            <FaFacebookF />
                                        </span>
                                        <span className='bannerIcon'>
                                            <FaTwitter />
                                        </span>
                                        <span className='bannerIcon'>
                                            <FaLinkedinIn />
                                        </span>
                                    </div>
                                </div>
                                <span
                                onClick={() => setShowMenu(false)}
                                className='absolute top-4 right-4 text-gray-400 hover:text-designColor
                                    duration-300 text-2xl cursor-pointer'
                                >
                                    <MdClose />
                                </span>
                            </div>
                            
                        </div>
                    )
                }
            </div>

            {
                props.theme && (
                    
                    <motion.div initial={{opacity:.5}} animate={{opacity:1, transition:{duration:1}}}
                        onClick={event => props.moonClick()}
                        className="text-base font-normal text-gray-400 tracking-wide 
                        cursor-pointer hover:text-designColor duration-300
                        dark:text-darkSecondaryText dark:hover:text-darkDesignColor"
                    >  
                            <FaRegMoon />
                    </motion.div>
                )
            }
            {
                !props.theme && (
                    <motion.div initial={{opacity:.5}} animate={{opacity:1, transition:{duration:1}}}
                        onClick={event => props.moonClick()}
                        className="text-base font-normal text-gray-400 tracking-wide 
                        cursor-pointer hover:text-designColor duration-300
                        dark:text-darkSecondaryText dark:hover:text-darkDesignColor"
                    >
                            <FaSun />  
                    </motion.div>
                )
            }
            
        </div>
    )
}

export default Navbar