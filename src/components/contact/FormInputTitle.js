import React, { useState } from 'react'
import { FaBullseye } from 'react-icons/fa';


const FormTitle = ( props ) => {
    return (
        <p className='text-sm 
            text-gray-400 dark:text-darkSecondaryText 
            uppercase tracking-wide'>
            {props.text}
        </p>
    )
}

export default FormTitle