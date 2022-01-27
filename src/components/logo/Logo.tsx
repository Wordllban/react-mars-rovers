import React from 'react'

// images
import logo from '../../assets/images/logo.png'

export const Logo = () => {
    return (
        <>
          <img src={logo} alt="Mars Rovers" className='lg:h-[6.5rem] md:h-[5.5rem] h-[5rem]' />  
        </>
    )
}
