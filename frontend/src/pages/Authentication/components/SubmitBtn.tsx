type SubmitBtnProps = {
  text: string;
  isSubmitting: boolean;
  onSubmit: () => void;
};

const SubmitBtn = ({ text, onSubmit, isSubmitting }: SubmitBtnProps) => {
  return (
    <button
      disabled={isSubmitting}
      className="mt-14 w-[60%] sm:w-2/3 mx-auto h-[50px] bg-primary bg-opacity-50 hover:bg-opacity-70 rounded-md  text-gray-100 transition-all duration-300 hover:text-gray-800 font-semibold disabled:bg-black disabled:text-primary"
      onClick={onSubmit}
    >
      {isSubmitting ? 'Loading....' : text}
    </button>
  );
};

export default SubmitBtn;
