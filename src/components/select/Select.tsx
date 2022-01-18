import React, { useState } from 'react'

import { sol } from '../../types/types';

export const Select = () => {
    const [rover, setRover] = useState<string | null | undefined>("curiosity");
    const [camera, setCamera] = useState<string | null | undefined>("")
    const [sol, setSol] = useState<sol | null | undefined>(1000)

    const roverHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
       const newRover = (event.target as HTMLButtonElement).getAttribute("name");
       setRover(newRover);
    }

    const solHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSol: sol = event.target.value;

        // validate input
        if(newSol && Number(newSol) >= 3360) {
            console.log("invalid sol input");
            setSol(3359);
            return;
        }

        setSol(newSol)
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
                    <h3>Sol</h3>
                    <p className='mb-4'>
                        Sol is a day on Mars. For more details click 
                        <a href="https://en.wikipedia.org/wiki/Sol_(day_on_Mars)" className='text-sky-500'> here</a>.
                    </p>
                    <input type="number" min="1" max="3359" onChange={solHandler}
                        className='mb-1 max-w-[10rem] w-full py-2 px-4 bg-cyan-500/10 border-2 border-nasa-blue rounded focus:outline-none focus:outline-sky-700'
                    />
                    { // warning for invalid sol input
                       sol && sol >= 3359
                       ? <p className='error text-nasa-red'>This is maximum Sol value. Range: 1 to 3359</p>
                       : <p>Range: 1 to 3359</p>
                    }
                </div>

                <div className='my-12'>
                    <h3>Cameras</h3>

                </div>
            </div>
        </section>
    )
}

