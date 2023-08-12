import React from 'react'
import { contactImg } from "../../assets/index"
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"
import FindMeIcons from '../General/FindMeIcons'

const ContactLeft = () => {
    return (
        <div className="w-full lg:w-[35%] h-full bg-gradient-to-r 
                    from-[#1e2024] to-[#23272b]
                    dark:from-darkSecondaryDesignColor dark:to-darkSecondaryDesignColor
                    p-4 lg:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center"
                    >
                        <img 
                            className="w-full h-64 object-cover rounded-lg mb-2"
                            src={contactImg} 
                            alt="contactImg"        
                        />
                        <div className='flex flex-col gap-4'>
                            <h3 className="text-3xl font-bold 
                            text-white dark:text-darkSecondaryText">
                                Jonathan Camberos
                            </h3>
                            <p className="text-lg font-normal 
                                text-gray-400 dark:text-darkSecondaryText">
                                Software Engineer
                            </p>
                            <p className="text-base tracking-wide 
                                text-gray-400 dark:text-darkSecondaryText">
                               Lets Connect!
                            </p>
                        </div>
                        <FindMeIcons text={true}/>

                    </div>
    )
}

export default ContactLeft