import React, { useEffect, useState } from 'react'
import { getRoverPhotos } from '../../services/api';

import { sol } from '../../types/types';
import { CameraItem } from './CameraItem';
import { RoverItem } from './RoverItem';

export const Select = () => {
    const [photos, setPhotos] = useState();
    const [rover, setRover] = useState<string>("Curiosity");
    const [sol, setSol] = useState<sol>(1000);
    const [camera, setCamera] = useState<string | null | undefined>();

    useEffect(() => {
        console.log(photos);
    }, [photos])

    const fetchPhotos = async (currentRover: string, currentSol: sol, currentCamera: string | null | undefined) => {
        const newPhotos = await getRoverPhotos(currentRover, currentSol, currentCamera);
        setPhotos(newPhotos.photos);
    } 

    const roverHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
       const newRover = (event.target as HTMLButtonElement).getAttribute("name");
       if(newRover) setRover(newRover);
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

    const cameraHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        const newCamera = (event.target as HTMLButtonElement).getAttribute("name");
        setCamera(newCamera);
    }

    return (
        <section className='py-8'>
            <div className='container mx-auto'>
                <h2 className='text-4xl'>Setup Photolist</h2>

                <div className='my-12 px-20 max-w-4xl'>
                    <h3>Rovers</h3>
                    <RoverItem roverName="Curiosity" onClick={roverHandler} disabled={rover === "Curiosity" ? true : false}/>
                    <RoverItem roverName="Opportunity" onClick={roverHandler} disabled={rover === "Opportunity" ? true : false}/>
                    <RoverItem roverName="Spirit" onClick={roverHandler} disabled={rover === "Spirit" ? true : false}/>
                </div>

                <div className='px-20'>
                    <h3>Sol</h3>
                    <p className='mb-4'>
                        Sol is a day on Mars. For more details click 
                        <a href="https://en.wikipedia.org/wiki/Sol_(day_on_Mars)" className='text-sky-500'> here</a>.
                    </p>
                    <input type="number" min="1" max="3359" value={sol} onChange={solHandler}
                        className='mb-1 max-w-[10rem] w-full py-2 px-4 bg-cyan-500/10 border-2 border-nasa-blue rounded focus:outline-none focus:outline-sky-700'
                    />
                    <p>Range: 1 to 3359</p>                  
                </div>

                <div className='my-12 px-20'>
                    <h3>Cameras</h3>
                    <p className='max-w-lg mb-4'>
                       Each rover has its own cameras, and some of them are unique. 
                       You can choose only one camera at time or don't choose it at all.
                       If you haven't choose the camera you will get photos from them all!
                    </p>
                    {/**
                     *  i beilive thats can me modified with Array.map()
                     *  but for now its hardcoded
                     */}
                    <div className='grid gap-4 grid-cols-2 max-w-md'>
                        <CameraItem cameraName="FHAZ" onClick={cameraHandler} disabled={camera === "FHAZ" ? true : false}/>
                        <CameraItem cameraName="RHAZ" onClick={cameraHandler} disabled={camera === "RHAZ" ? true : false}/>
                        <CameraItem cameraName="NAVCAM" onClick={cameraHandler} disabled={camera === "NAVCAM" ? true : false}/>
                        { rover && rover === "Curiosity"
                            ?
                            <>
                                <CameraItem cameraName="MAST" onClick={cameraHandler} disabled={camera === "MAST" ? true : false}/>
                                <CameraItem cameraName="CHEMCAM" onClick={cameraHandler} disabled={camera === "CHEMCAM" ? true : false}/>
                                <CameraItem cameraName="MAHLI" onClick={cameraHandler} disabled={camera === "MAHLI" ? true : false}/>
                                <CameraItem cameraName="MARDI" onClick={cameraHandler} disabled={camera === "MARDI" ? true : false}/>
                            </>
                            :
                            <>
                                <CameraItem cameraName="PANCAM" onClick={cameraHandler} disabled={camera === "PANCAM" ? true : false}/>
                                <CameraItem cameraName="MINITES" onClick={cameraHandler} disabled={camera === "MINITES" ? true : false}/>
                            </>
                        }
                    </div>
                </div>
                <div className='px-20'>
                    <button className='btn mb-8' onClick={() => fetchPhotos(rover, sol, camera)}>
                        Search Mars photos
                    </button>
                    <div className='grid grid-cols-4 gap-4'>
                        {photos ? (photos as Array<{img_src: string}>).map((item) => <img src={item.img_src}/>)
                        : <div className='text-nasa-red'>no photos found</div>    
                    }
                    </div>
                </div>
            </div>
        </section>
    )
}

