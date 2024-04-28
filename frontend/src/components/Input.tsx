import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

interface InputProps {
  label: string;
  type: string;
  nameInput: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  classParent?: string;
  classLabel?: string;
  classInput?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ label, type, nameInput, register, error, classParent = '', classLabel = '', classInput = '', placeholder = '' }) => {
  return (
    <div className={classParent}>
      <label className={classLabel}>{label}</label>
      <input type={type} name={nameInput} {...register(nameInput)} className={classInput} placeholder={placeholder} />
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
};

export default Input;
