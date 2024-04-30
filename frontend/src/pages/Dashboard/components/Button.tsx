import React from 'react';

type ButtonProps = {
  bgColor: string;
  color: string;
  size?: string;
  text: string;
  borderRadius: string;
};

const Button = ({ bgColor, color, size, text, borderRadius }: ButtonProps) => {
  return (
    <button type="button" style={{ backgroundColor: bgColor, color: color, borderRadius: borderRadius }} className={`text-${size} p-3 hover:drop-shadow-xl`}>
      {text}
    </button>
  );
};

export default Button;
