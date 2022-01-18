import React, { useState } from 'react'

import { sol } from '../../types/types';

export const Select = () => {
    const [rover, setRover] = useState<string | null | undefined>("curiosity");
    const [camera, setCamera] = useState<string | null | undefined>("")
    const [sol, setSol] = useState<sol | null | undefined>("")

    const roverHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
       const newRover = (event.target as HTMLButtonElement).getAttribute("name");
       setRover(newRover);
    }

    const cameraHandler = () => {

    }

    return (
        <section className='py-8'>
            <div className='container mx-auto'>
                <h2 className='text-4xl'>Setup Photolist</h2>

                <div className='my-12'>
                    <h3>Rovers</h3>
                    <button name="curiosity" onClick={roverHandler} disabled={rover === "curiosity" ? true : false}
                        className='btn-rover mr-16'                    >
                        Curiosity
                    </button>
                    <button name="opportunity" onClick={roverHandler} disabled={rover === "opportunity" ? true : false}  
                        className='btn-rover mr-16'
                    >
                        Opportunity
                    </button>
                    <button name="spirit" onClick={roverHandler} disabled={rover === "spirit" ? true : false}
                        className='btn-rover mr-16'
                    >
                        Spirit
                    </button>
                </div>

                <div>
                    <h3 className=''></h3>
                </div>

                <div className=''>
                    <h3 >Cameras</h3>

                </div>
            </div>
        </section>
    )
}

