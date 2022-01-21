import React from 'react';
import { NavItemProps } from '../../types/types';

export const FooterItem = (props: NavItemProps) => {
  return (
      <li>
          <a href={props.link} className='hover:text-nasa-red'>
              {props.name}
          </a>
      </li>
  );
};
