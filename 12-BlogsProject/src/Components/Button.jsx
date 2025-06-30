import React from 'react'

function Button({
    children,                              //jo yaha pass kiya name vo hi nichhe kra hai
    type='button' ,    
    bgColor='bg-blue-600',
    textColor='text-white',
    className='',
    ...props        
}) {
  return (
    <button className={`px-4 py-2 rounded-lg  ${bgColor} ${textColor} ${className} `}{...props}>
        {children}              
    </button>
  )
}

export default Button