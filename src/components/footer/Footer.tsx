import React from 'react';

// images
import marsPhoto from '../../assets/images/mars_footer.png'

// components
import { FooterItem } from './FooterItem';

export const Footer = () => {
  return (
    <footer className='pb-8 sm:pb-20 pt-8 bg-black/40 relative'>
      <div className='container mx-auto flex justify-center sm:justify-between px-16'>
        <div className='hidden sm:block'>
            <img src={marsPhoto} alt="" 
              className='max-h-72 rotate-180 absolute left-[-30%] md:left-[-5%]'
            />
        </div>
        <div className='flex justify-end text-lg z-10'>
          <nav className='mr-32 '>
            <h4 className='mb-4 text-nasa-blue'>Navigation</h4>
            <menu className='space-y-4'>
              <FooterItem name="About" link="#about"/>
              <FooterItem name="Rovers" link="#rovers"/>
              <FooterItem name="NASA API" link="https://api.nasa.gov"/>
              <FooterItem name="Github" link="https://github.com/Wordllban/react-mars-rovers"/>
              <FooterItem name="Contact me" link="https://www.linkedin.com/in/kostiantyn-mininkov-9869a4217/"/>
          </menu>
          </nav>
          <div>
              <h4 className='mb-4 text-nasa-blue'>Social media</h4>
              <ul className='space-y-4'>
                <FooterItem name="Facebook" link="https://www.facebook.com/kostia.mininkov.1/"/>
                <FooterItem name="Linked in" link="https://www.linkedin.com/in/kostiantyn-mininkov-9869a4217/"/>
                <FooterItem name="Soundcloud" link="https://soundcloud.com/wordllban/likes"/>
              </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
