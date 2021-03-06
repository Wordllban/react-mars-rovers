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
            <article className='text-white my-16 flex justify-between flex-col lg:flex-row transition'>
                <div className='px-6 sm:px-12'>
                    <h3>
                        {props.name}
                    </h3>
                    <p className='max-w-xl text-xl'>
                        {props.info}
                    </p>
                    <details className='my-3 p-2 transition-all text-lg open:shadow-xl open:shadow-cyan-500/10
                        open:bg-cyan-600/10 rounded 
                    '>
                        <summary className='mb-3 cursor-pointer max-w-[7rem]'>More info</summary>
                        <ul className='space-y-1'>
                            <li>Launch date: {props.launchDate}</li>
                            <li>Landing date: {props.landingDate}</li>
                            <li className='flex items-center'>
                                <a href={props.wikiURL}
                                   className='text-sky-500 hover:text-nasa-red'>
                                    Wikipedia
                                    <img src={externalLink} alt="external link"
                                         className='inline-block w-6 h-6'
                                    />
                                </a>
                            </li>
                        </ul>
                    </details>
                </div>
                <div className='px-12'>
                    <img src={props.photo} alt="rover" className='mx-auto max-w-96 max-h-96 shadow-xl shadow-cyan-500/10'/>
                </div>
            </article> 
    )
}
