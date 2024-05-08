type InputProps = {
  name: string;
  placeholder: string;
  type: string;
  register: any;
  error?: any;
};

const Input = ({ placeholder, name, type, register, error }: InputProps) => {
  return (
    <div className="relative w-[80%]">
      <span className="absolute right-0 text-red-500">*</span>

      <input
        className="bg-transparent border-b-[1px] px-1 py-3 border-b-secondary text-center outline-none text-secondary placeholder:text-gray-400 h-[50px]  w-[100%]"
        placeholder={placeholder}
        name={name}
        type={type}
        {...register(name, {
          required: `${placeholder} is requried`,
        })}
      />

      {error && <span className="text-red-500 text-sm w-full">{error?.message}</span>}
    </div>
  );
};

export default Input;
