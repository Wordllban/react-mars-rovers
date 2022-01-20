import React from 'react';

interface CameraProps {
    cameraName: string;
    onClick: any;
    disabled?: any;
}

export const CameraItem = (props: CameraProps) => {
  return (
    <button name={props.cameraName} onClick={props.onClick} className='btn-select' disabled={props.disabled}>
        {props.cameraName}
    </button>
  );
};
