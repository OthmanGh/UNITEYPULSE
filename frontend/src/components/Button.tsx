import styles from '.';

import React from 'react';

type ButtonProps = {
  onClick: () => void;
  text: string;
  classes: string;
};

const Button = ({ onClick, text, classes }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${classes}`}>
      {text}
    </button>
  );
};

export default Button;
