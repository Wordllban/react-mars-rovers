import React from 'react'

export const Hero = () => {
    return (
        <section className='mb-64'>
            <div className='container mx-auto py-20'>
                <div>
                    <h1 className='text-5xl font-semibold mb-10'>See new photo from Mars</h1>
                    <p className='text-2xl font-light mb-48 max-w-lg'>
                        Just choose the Rover with camera view and you all set!
                        You can view high quality photos from Curiosity, Opportunity and Spirit.
                    </p>

                    <button className="border-2 rounded border-white px-28 py-2 text-xl font-bold shadow-lg">
                        Try now
                    </button>
                </div>
                <div>
                    <img src="" alt="" />
                </div> 
            </div> 
        </section>
    )
}

