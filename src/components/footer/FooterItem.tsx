import React from 'react';

// types
import { NavItemProps } from '../../types/types';

export const FooterItem = (props: NavItemProps) => {
  return (
      <li>
          <a href={props.link} className='hover:text-nasa-red pl-1'>
              {props.name}
          </a>
      </li>
  );
};
