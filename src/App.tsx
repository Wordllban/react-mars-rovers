import { useEffect, useState} from 'react';
import './App.css';
import { Hero } from './components/hero/Hero';
import { Navbar } from './components/navbar/Navbar';
import { RoversSection } from './components/rovers/RoversSection';
import { getRoverPhotos } from './services/api';

interface rawData {
  photos: []
}

interface MarsPhotos {
  id: number | string;
  sol: number | string;
  camera: {};
  img_src: string;
}

function App() {
  const [items, setItems] = useState<MarsPhotos[]>();

  useEffect(() => {
    setTimeout(async () => {
     // let rawData: rawData = await getRoverPhotos("curiosity", "fhaz", "1000")
     // setItems(rawData.photos)  
    }, 300)
  }, [])

  console.log('items: ', items);
  
  return (
    <div className=' bg-slate-900 text-white'>
      <Navbar />
      <Hero />
      <RoversSection /> 
    </div> 
  );
}

export default App;
