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
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  nameInput,
  register,
  error,
  classParent = '',
  classLabel = '',
  classInput = '',
  placeholder = '',
  required = false,
}) => {
  return (
    <div className={classParent}>
      <input
        type={type}
        name={nameInput}
        {...register(nameInput, { required: required ? `${label} field is required` : false })}
        className={classInput}
        placeholder={placeholder}
      />
      {error && <p className="text-primary-light text-sm mt-[7px] ml-[2px]">{error.message}</p>}
    </div>
  );
};

export default Input;
