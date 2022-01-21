import React from 'react'
import { NavItemProps } from '../../types/types'

export const HeaderItem = (props: NavItemProps) => {
    return (
        <li className='border-r-2 border-gray-600/40 px-10 last:border-none'>
             <a href={props.link} className=' hover:text-nasa-red'>
                {props.name}
            </a>
        </li>       
    )
}
