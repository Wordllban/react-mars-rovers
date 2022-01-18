import React from 'react'
import { Logo } from '../logo/Logo'
import { HeaderItem } from './HeaderItem'

export const Header = () => {
    return (
       <header className='sticky top-0 backdrop-blur z-10'>
           <div className='container mx-auto flex justify-between items-center py-2 border-b-2 border-gray-600/30'>
                <Logo />

                <nav>
                    <menu className='flex justify-center text-3.5xl font-light'>
                        <HeaderItem name="About" link="#"/>
                        <HeaderItem name="Rovers" link="#"/>
                        <HeaderItem name="Nasa API" link="#"/>
                        <HeaderItem name="Github" link="#"/>
                        <HeaderItem name="Contact me" link="#"/>
                    </menu>
                </nav>
           </div>
       </header> 
    )
}
