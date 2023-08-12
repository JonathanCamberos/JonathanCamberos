import React from 'react'

const Title = ( { title, des }) => {
    return (
       
        <div className='flex flex-col gap-4 font-titleFont mb-14'>
            <h3 className="text-sm uppercase font-light text-designColor 
                tracking-wide dark:text-darkDesignColor">
                {title}
            </h3>
            <h1 className="text-4xl lg:text-5xl text-white font-bold 
                capitalize dark:text-darkLightText">
                {des}
            </h1>
        </div>
            
        
    )
}

export default Title