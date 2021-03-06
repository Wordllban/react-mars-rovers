import React, { useState } from 'react'

// api
import { getRoverPhotos } from '../../services/api';

// types
import { sol } from '../../types/types';

// components
import { CameraItem } from './CameraItem';
import { RoverItem } from './RoverItem';

export const Select = () => {
    // pagination states
    const [showMoreCount, setShowMoreCount] = useState<number>(9);

    // filter states
    const [photos, setPhotos] = useState<[]>();
    const [rover, setRover] = useState<string>("Curiosity");
    const [sol, setSol] = useState<sol>(1000);
    const [camera, setCamera] = useState<string | null | undefined>();

    const showMoreHandler = () => {
        setShowMoreCount(showMoreCount + 9);
    }

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
        <section id="app" className='pb-8 relative before:content-[""] before:rotate-[-60deg] before:absolute
         before:h-[36rem] before:w-[20rem] before:blur-[75px] before:bg-gradient-to-r
         before:right-[-15%] before:lg:right-[-1%] before:bottom-[5%] before:lg:bottom-[10%]
       before:from-fuchsia-600/70 before:via-cyan-600/30 before:to-indigo-600/70 overflow-hidden'>
        
            <div className='container mx-auto relative z-10'>
                <h2 className='text-4xl'>Setup Photolist</h2>

                <div className='my-16 flex gap-[2rem] flex-auto flex-wrap justify-between align-center lg:mr-16'>
                    <div className='md:px-12'>
                        <h3>Rovers</h3>
                        <div className='flex gap-12 md:gap-24 flex-col sm:flex-row'>
                            <RoverItem roverName="Curiosity" onClick={roverHandler} disabled={rover === "Curiosity" ? true : false}/>
                            <RoverItem roverName="Opportunity" onClick={roverHandler} disabled={rover === "Opportunity" ? true : false}/>
                            <RoverItem roverName="Spirit" onClick={roverHandler} disabled={rover === "Spirit" ? true : false}/>
                        </div>
                    </div>

                    <div className='md:px-12'>
                        <h3>Sol</h3>
                        <p className='mb-4 text-lg'>
                            Sol is a day on Mars. For more details click 
                            <a href="https://en.wikipedia.org/wiki/Sol_(day_on_Mars)" className='text-sky-500'> here</a>.
                        </p>
                        <input type="number" min="1" max="3359" value={sol} onChange={solHandler}
                            className='mb-1 max-w-[10rem] w-full py-2 px-4 bg-cyan-500/10 border-2 border-nasa-blue rounded focus:outline-none focus:outline-sky-700'
                        />
                        <p>Range: 1 to 3359</p>                  
                    </div>

                    <div className='md:px-12'>
                        <h3>Cameras</h3>
                        <p className='max-w-xl mb-4 text-lg'>
                           Each rover has its own cameras, and some of them are unique. 
                           You can choose only one camera at time or don't choose it at all.
                           If you haven't choose the camera you will get photos from them all!
                        </p>
                        {/**
                         *  i beilive thats can be modified with Array.map()
                         *  but for now its hardcoded
                         */}
                        <div className='grid gap-10 md:gap-8 grid-cols-2 md:grid-cols-3 max-w-6xl'>
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
                            <button className='block mt-10 md:mt-8 btn-select' onClick={() => setCamera(undefined)}>Unselect Camera</button>
                        </div>
                    </div>
                <div className='md:px-12'>
                    <button className='btn mb-8' onClick={() => fetchPhotos(rover, sol, camera)}>
                        Search Mars photos
                    </button>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 auto-cols-fr'>
                        {photos && photos.length !== 0 ? (photos.slice(0, showMoreCount) as Array<{img_src: string}>).map((item) => <img src={item.img_src} alt=""/>)
                        : <div className='text-nasa-red'>no photos found</div>    
                        }
                    </div>
                    <div className='mt-8 text-center'>
                        { photos && (showMoreCount < photos?.length)
                            && 
                          <button className='btn' name="view more button" onClick={showMoreHandler}>View more</button>
                        }    
                    </div> 
                </div>
            </div>
        </section>
    )
}
