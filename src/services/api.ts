import axios from 'axios';

const apiKey: string = ""

const http = axios.create({
    baseURL: 'https://api.nasa.gov/mars-photos/api/v1/rovers',
});

export const getRoverPhotos = async (rover: string, camera: string, sol?: string | number) => {
    let url: string = `http://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?`;

    if(sol !== undefined && sol !== "") {
        url += `sol=${sol}&`
    }

    if(camera !== undefined && camera !== "") {
        url += `camera=${camera}&` 
    }

    if(apiKey !== undefined && apiKey !== "") {
        url += `api_key=${apiKey}`
    } else {
        url += `api_key=DEMO_KEY`
    }

    console.log('url', url);

    return (await http.get(url)).data;    
}
