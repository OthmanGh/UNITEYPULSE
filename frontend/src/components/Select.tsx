import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

interface SelectProps {
  label?: string;
  name: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  classParent?: string;
  classLabel?: string;
  classSelect?: string;
  children?: string;
}

const Select: React.FC<SelectProps> = ({ name, register, error, classParent = '', classLabel = '', classSelect = '', children }) => {
  return (
    <div className={classParent}>
      <select name={name} {...register(name)} className={classSelect}>
        {children}
      </select>
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
};

export default Select;
