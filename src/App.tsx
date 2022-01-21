
import './App.css';
import { Hero } from './components/hero/Hero';
import { Header } from './components/header/Header';
import { RoversSection } from './components/rovers/RoversSection';
import { Select } from './components/select/Select';
import { Footer } from './components/footer/Footer';




function App() {
  return (
    <div className=' bg-slate-900 text-white'>
      <Header />
      <Hero />
      <RoversSection /> 
      <Select />
      <Footer />
    </div> 
  );
}

export default App;
