import React, { useState } from 'react'
import FormInputTitle from './FormInputTitle';

// Stopped at 48:29 ********************************
// HEREHEEHERHSDFHSFHSDFHSDGH

const ContactRight = () => {

    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState(""); 

    const emailValidation = () => {
        return String(email)
            .toLocaleLowerCase()
            .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    }

    const handleSend = (e) => {
        e.preventDefault();
        if(username === ""){
            setErrMsg("Username is required!")
        }else if (phoneNumber === ""){
            setErrMsg("Phone number is required!")
        }else if (email === ""){
            setErrMsg("Please provide your email!");
        }else if(!emailValidation(email)){
            setErrMsg("Give a valid Email!");
        }else if (subject === ""){
            setErrMsg("Subject is required!");
        }else if(message === ""){
            setErrMsg("Message is required!");
        }else{
            setSuccessMsg(`Thank you ${username}! Your message has been sent successfully!`);
            setErrMsg("");
            setUsername("");
            setPhoneNumber("");
            setEmail("");
            setSubject("");
            setMessage("");
        }
    }

    return (
        <div className="w-full lg:w-[60%] h-full py-10 bg-gradient-to-r 
            from-[#1e2024] to-[#23272b]
            dark:from-darkSecondaryDesignColor dark:to-darkSecondaryDesignColor
            flex flex-col gap-8 p-4 lg:p-8 rounded-lg shadow-shadowOne"
        >
            <form className="w-full flex flex-col gap-4 lg:gap-6 py lg:py-5">
                {
                    errMsg && (
                        <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]
                        shadow-shadowOne text-center text-orange-500 text-base tracking-wide
                        animate-bounce'
                        >
                            {errMsg}
                        </p>
                    )
                }
                {
                    successMsg && (
                        <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] 
                            shadow-shadowOne text-center text-green-500 text-base 
                            tracking-wide animate-bounce'>
                            {successMsg}
                        </p>
                    )
                }

                <div className='w-full flex flex-col lg:flex-row gap-10'>
                    <div className='w-full lg:w-1/2 flex flex-col gap-4'>
                        <FormInputTitle text={"YOUR NAME"} />
                        <input 
                            onChange={(e)=>setUsername(e.target.value)} 
                            value={username}
                            className={`${errMsg === "Username is required!" && "outline-designColor"
                                } contactInput`}
                            type="text"
                        />
                    </div>
                    <div className='w-full lg:w-1/2 flex flex-col gap-4'>
                        <FormInputTitle text={"PHONE NUMBER"} />
                        <input 
                            onChange={(e)=>setPhoneNumber(e.target.value)}
                            value={phoneNumber}
                            className={`${errMsg === "Phone number is required!" && "outline-designColor"
                                } contactInput`}
                            type="text"
                        />
                    </div>
                    
                </div>
                <div className='flex flex-col gap-4'>
                    <FormInputTitle text={"EMAIL"} />
                    <input 
                        onChange={(e)=>setEmail(e.target.value)} 
                        value={email}
                        className={`${(errMsg === "Please provide your email!" || 
                        errMsg === "Give a valid Email!") && "outline-designColor"
                                } contactInput`}
                        type="text"/>
                </div>
                <div className='flex flex-col gap-4'>
                    <FormInputTitle text={"SUBJECT"} />
                    <input 
                        onChange={(e) => setSubject(e.target.value)}
                        value={subject}
                        className={`${errMsg === "Subject is required!" && "outline-designColor"
                                } contactInput`}
                        type="text"
                    />
                </div>
                <div className='flex flex-col gap-4'>
                    <FormInputTitle text={"MESSAGE"} />
                    <textarea
                        onChange={(e) => setMessage(e.target.value)}
                        className={`${errMsg === "Message is required!" && "outline-designColor"
                                } contactTextArea`}
                        value={message}
                        type="text" 
                        cols="30" rows="10"
                    >
                    </textarea>
                </div>
                <div className='w-full'>
                    <button onClick={handleSend} className='w-full h-12 bg-[#141518] rounded-lg text-base
                        text-gray-400 tracking-wider uppercase hover:text-white duration-300
                        hover:border-[1px] hover:border-designColor border-transparent'
                    >
                        Send Message
                    </button>
                </div>
                {
                    errMsg && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]
                        shadow-shadowOne text-center text-orange-500 text-base tracking-wide
                        animate-bounce'
                    >
                        {errMsg}
                    </p>
                }
                {
                    successMsg && (
                        <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] 
                            shadow-shadowOne text-center text-green-500 text-base 
                            tracking-wide animate-bounce'>
                            {successMsg}
                        </p>
                    )
                }
            </form>
        </div>
    )
}

export default ContactRight