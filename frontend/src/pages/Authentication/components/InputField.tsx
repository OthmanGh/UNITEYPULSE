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
      <label htmlFor={id} className="font-semibold">
        {labelText}
      </label>
      <input id={id} type={type} name={name} placeholder={placeholder} className={`h-[50px] px-4 rounded-[10px] outline-none ${classes || ''}`} />
    </fieldset>
  );
};

export default InputField;
