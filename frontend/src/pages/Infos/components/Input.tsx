import { useState } from 'react';

type InputProps = {
  name: string;
  placeholder: string;
  type: string;
  register: any;
  error?: any;
};

const Input = ({ placeholder, name, type, register, error }: InputProps) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="relative w-[80%]">
      <label htmlFor={name} className="sr-only">
        {placeholder}
      </label>
      <span className="absolute right-0 text-red-500">*</span>

      <input
        id={name}
        className="bg-transparent border-b-[1px] px-1 py-3 border-b-secondary text-center outline-none text-secondary placeholder:text-gray-400 h-[50px]  w-[100%]"
        placeholder={placeholder}
        name={name}
        type={type}
        value={value}
        {...register(name, {
          required: `${placeholder} is required`,
        })}
        onChange={handleChange}
      />

      {error && <span className="text-red-500 text-sm w-full">{error?.message}</span>}
    </div>
  );
};

export default Input;
