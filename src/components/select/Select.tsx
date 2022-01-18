import React, { useState } from 'react'

import { sol } from '../../types/types';

export const Select = () => {
    const [rover, setRover] = useState<string | null | undefined>();
    const [camera, setCamera] = useState<string | null | undefined>("")
    const [sol, setSol] = useState<sol | null | undefined>("")

    const roverHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
       const newRover = (event.target as HTMLButtonElement).getAttribute("name");
       setRover(newRover);
    }



    return (
        <section className='py-8'>
            <div className='container mx-auto'>
                <h2 className='text-4xl'>Select Rover</h2>

                <div className='my-16 space-x-16'>
                    <button name="curiosity" onClick={roverHandler} disabled={rover !== "curiosity" || "" ? false : true}
                        className='btn-rover'                    >
                        Curiosity
                    </button>
                    <button name="opportunity" onClick={roverHandler} disabled={rover !== "opportunity" || "" ? false : true}  
                        className='btn-rover'
                    >
                        Opportunity
                    </button>
                    <button name="spirit" onClick={roverHandler} disabled={rover !== "spirit" || "" ? false : true}
                        className='btn-rover'
                    >
                        Spirit
                    </button>
                </div>
            </div>
        </section>
    )
}

