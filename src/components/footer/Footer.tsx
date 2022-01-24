import React from 'react';
import marsPhoto from '../../assets/images/mars_footer.png'

import { FooterItem } from './FooterItem';

export const Footer = () => {
  return (
    <footer className='pb-20 pt-8 bg-black/40 relative'>
      <div className='container mx-auto flex justify-between px-16'>
        <div className=''>
            <img src={marsPhoto} alt="" 
              className='max-h-72 rotate-180 absolute left-[-5%]'
            />
        </div>
        <div className=' flex justify-end text-lg'>
          <nav className='mr-32 '>
            <h4 className='mb-4 text-nasa-blue'>Navigation</h4>
            <menu className='space-y-2'>
              <FooterItem name="About" link="#"/>
              <FooterItem name="Rovers" link="#"/>
              <FooterItem name="NASA API" link="#"/>
              <FooterItem name="Github" link="#"/>
              <FooterItem name="Contact me" link="#"/>
          </menu>
          </nav>
          <div>
              <h4 className='mb-4 text-nasa-blue'>Social media</h4>
              <ul className='space-y-2'>
                <FooterItem name="Facebook" link="#"/>
                <FooterItem name="LinkedIn" link="#"/>
                <FooterItem name="Soundcloud" link="#"/>
                <FooterItem name="" link="#"/>
              </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
