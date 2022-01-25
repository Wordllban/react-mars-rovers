import React from 'react';

interface RoverProps {
    roverName: string;
    onClick: any;
    disabled: any;
}

export const RoverItem = (props: RoverProps) => {
  return (
    <button name={props.roverName} onClick={props.onClick} className='btn-select' disabled={props.disabled}>
        {props.roverName}
    </button>
  );
};
