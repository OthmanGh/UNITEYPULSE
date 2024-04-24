import React from 'react';

interface InputProps {
  label: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, type, value, onChange }: InputProps) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
