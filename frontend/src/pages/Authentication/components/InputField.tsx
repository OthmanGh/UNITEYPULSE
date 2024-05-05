type InputFieldProps = {
  name: string;
  placeholder: string;
  type: string;
  labelText: string;
  id: string;
  classes?: string;
  register: any;
  required?: boolean;
  error?: any;
};

const InputField = ({ name, placeholder, type, labelText, id, classes, register, error }: InputFieldProps) => {
  return (
    <fieldset className="flex flex-col gap-1 w-full">
      <label htmlFor={id} className="font-semibold  text-gray-200">
        {labelText}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        className={`h-[50px] px-4 rounded-md  outline-none ${
          classes || ''
        } bg-half-transparent border-b-2 border-b-primary placeholder:text-gray-500 text-primary`}
        {...register(id, {
          required: `${name} is required`,
        })}
      />
      {error && <span className="text-red-500 text-sm w-full">{error?.message}</span>}
    </fieldset>
  );
};

export default InputField;
