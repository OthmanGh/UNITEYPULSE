type InputFieldProps = {
  name: string;
  placeholder: string;
  type: string;
  labelText: string;
  id: string;
  classes?: string;
};

const InputField = ({ name, placeholder, type, labelText, id, classes }: InputFieldProps) => {
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
        } bg-half-transparent border-b-2 border-b-primary placeholder:text-gray-500 text-primary `}
      />
    </fieldset>
  );
};

export default InputField;
