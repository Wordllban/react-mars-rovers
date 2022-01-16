import React from 'react'

interface NavItemProps {
    name: string;
    link: string;
}

export const NavbarItem = (props: NavItemProps) => {
    return (
        <li className='border-r-2 border-gray-600/40 px-10 last:border-none'>
             <a href={props.link} className=' hover:text-nasa-red'>
                {props.name}
            </a>
        </li>       
    )
}
