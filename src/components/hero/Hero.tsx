import React from 'react'

import marsImage from "../../assets/images/mars.png"

export const Hero = () => {
    return (
        <section className='mb-64 flex justify-between relative px-16'>
            <div className='container mx-auto py-20' >
                <div>
                    <h1 className='text-5xl font-semibold mb-10'>Discover Mars with NASA</h1>
                    <p className='text-2xl font-light mb-48 max-w-lg'>
                        See new photo from Rovers in Mars. Just choose the Rover with camera view and you all set!
                        There are 3 Mars rovers: Curiosity, Opportunity and Spirit!
                    </p>

                    <div className='relative group inline-block'>
                        <a href="#" className="relative transition border-2 border-l-nasa-red
                          border-t-nasa-red border-b-nasa-blue border-r-nasa-blue
                            px-28 py-2 text-xl font-bold z-30">
                            Try now
                        </a>
                        <span className="before:transition-all before:duration-500 before:content-['']
                            before:z-under before:w-0 before:h-0 before:absolute before:top-[-85%] before:left-[-35%]
                            before:border-t-[45px] before:border-r-[300px] before:border-r-transparent before:border-nasa-red/70
                            group-hover:before:z-10 group-hover:before:top-[-0.5rem] group-hover:before:left-[0.13rem]
                            after:transition-all after:duration-500 after:content-['']
                            after:z-under after:w-0 after:h-0 after:absolute after:bottom-[-85%] after:right-[-35%]
                            after:border-b-[45px] after:border-l-[300px] after:border-l-transparent after:border-nasa-blue/70
                            group-hover:after:z-10 group-hover:after:bottom-[-0.48rem] group-hover:after:right-[0.05rem]">
                        </span>
                    </div>
                </div>
                 
            </div>
            <div>
                <img src={marsImage} alt="Mars" className='max-w-5xl absolute top-[-55%] right-[-15%] lg:right-[-25%]'/>
            </div>
        </section>
    )
}

