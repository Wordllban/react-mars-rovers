import { useEffect, useState} from 'react';
import './App.css';
import { Hero } from './components/hero/Hero';
import { Header } from './components/header/Header';
import { RoversSection } from './components/rovers/RoversSection';
import { getRoverPhotos } from './services/api';
import { Select } from './components/select/Select';

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

  

  console.log('items: ', items);
  
  return (
    <div className=' bg-slate-900 text-white'>
      <Header />
      <Hero />
      <RoversSection /> 
      <Select />
    </div> 
  );
}

export default App;
