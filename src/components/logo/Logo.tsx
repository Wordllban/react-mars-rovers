import React from 'react'
import logo from '../../assets/images/NASA_logo.svg'

export const Logo = () => {
    return (
        <>
          <img src={logo} alt="NASA" className='lg:h-[6.5rem] md:h-[5.5rem] h-[5rem]' />  
        </>
    )
}
