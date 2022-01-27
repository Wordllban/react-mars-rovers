import React from 'react'

// types
import { NavItemProps } from '../../types/types'

export const HeaderItem = (props: NavItemProps) => {
    return (
        <>
             <a href={props.link} className=' hover:text-nasa-red whitespace-nowrap lg:border-r-2 lg:border-gray-600/40 lg:pr-8 xl:pr-12 lg:last:border-none px-0'>
                {props.name}
            </a>
        </>       
    )
}
