import React from 'react';
import { FooterItem } from './FooterItem';

export const Footer = () => {
  return (
    <footer className='pb-16'>
      <div className='container mx-auto flex justify-end text-lg'>
        <nav className='mr-32 '>
          <h4 className='mb-4'>Navigation</h4>
          <menu className='space-y-2'>
            <FooterItem name="About" link="#"/>
            <FooterItem name="Rovers" link="#"/>
            <FooterItem name="NASA API" link="#"/>
            <FooterItem name="Github" link="#"/>
            <FooterItem name="Contact me" link="#"/>
          </menu>
        </nav>
        <div>
            <h4 className='mb-4'>Social media</h4>
            <ul className='space-y-2'>
                <FooterItem name="Facebook" link="#"/>
                <FooterItem name="LinkedIn" link="#"/>
                <FooterItem name="Soundcloud" link="#"/>
                <FooterItem name="" link="#"/>
            </ul>
        </div>
      </div>
    </footer>
  );
};
