import React from 'react';

type OverlayProps = {
  opacity?: number;
  z_index?: number;
};

const Overlay = ({ opacity, z_index }: OverlayProps) => {
  return <div className={`absolute inset-0 bg-black bg-opacity-60 ${z_index}`}></div>;
};

export default Overlay;
