import React from 'react'

// icons
import externalLink from "../../assets/icons/external_link.svg"

// types
import { date } from '../../types/types'

interface RoverProps {
    name: string;
    photo: string;
    info: string;
    launchDate: date;
    landingDate: date;
    wikiURL?: string;
}

export const Rover = (props: RoverProps) => {
    return (
            <article className='text-white my-16 flex justify-between'>
                <div className='px-20'>
                    <h3 className='text-3xl mb-8'>
                        {props.name}
                    </h3>
                    <p>
                        {props.info}
                    </p>
                    <details className='mt-2'>
                        <summary className='mb-3'>More info</summary>
                        <ul className='space-y-1'>
                            <li>Launch date: {props.launchDate}</li>
                            <li>Landing date: {props.landingDate}</li>
                            <li className='flex items-center'>
                                <a href={props.wikiURL}
                                   className='text-sky-500'>
                                    Wikipedia
                                </a>
                                <div className='inline-block'>
                                    <img src={externalLink} alt="external link"
                                         className='w-6 h-6'
                                    />
                                </div>
                            </li>
                        </ul>
                    </details>
                </div>
                <img src={props.photo} alt="rover" className='max-w-96 max-h-96 px-20'/>
            </article> 
    )
}
