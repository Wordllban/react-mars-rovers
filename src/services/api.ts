import { sol } from './../types/types';
import axios from 'axios';

const apiKey: string = "rrQZZnkBYyJGmL8tIEFagUgeCqwYa6gYCvXaopHl"

const http = axios.create({
    baseURL: 'https://api.nasa.gov/mars-photos/api/v1/rovers',
});

export const getRoverPhotos = async (rover: string, sol?: sol, camera?: string | null) => {
    let url: string = `http://api.nasa.gov/mars-photos/api/v1/rovers/${rover.toLowerCase()}/photos?`;

    if(sol !== undefined && sol !== "") {
        url += `sol=${sol}&`
    }

    if(camera && camera !== undefined && camera !== "") {
        url += `camera=${camera.toLowerCase()}&` 
    }

    if(apiKey !== undefined && apiKey !== "") {
        url += `api_key=${apiKey}`
    } else {
        url += `api_key=DEMO_KEY`
    }

    console.log('url', url);

    return (await http.get(url)).data;    
}
