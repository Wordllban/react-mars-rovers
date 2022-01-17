import React from 'react'
import { Logo } from '../logo/Logo'
import { NavbarItem } from './NavbarItem'

export const Navbar = () => {
    return (
       <header className='sticky top-0 backdrop-blur z-10'>
           <div className='container mx-auto flex justify-between items-center py-2 border-b-2 border-gray-600/30'>
                <Logo />

                <nav>
                    <menu className='flex justify-center text-3.5xl font-light'>
                        <NavbarItem name="About" link="#"/>
                        <NavbarItem name="Rovers" link="#"/>
                        <NavbarItem name="Nasa API" link="#"/>
                        <NavbarItem name="Github" link="#"/>
                        <NavbarItem name="Contact me" link="#"/>
                    </menu>
                </nav>
           </div>
       </header> 
    )
}
