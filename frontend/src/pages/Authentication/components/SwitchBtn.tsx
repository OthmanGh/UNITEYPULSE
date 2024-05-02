type SwitchBtnProps = {
  text: string;
  onClick: () => void;
};

const SwitchBtn = ({ text, onClick }: SwitchBtnProps) => {
  return (
    <button
      className="mt-4 sm:mt-10  border-2 rounded-lg px-6 sm:px-10 py-2 sm:py-3 transition-all duration-500  hover:text-primary hover:border-primary  z-20"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default SwitchBtn;
