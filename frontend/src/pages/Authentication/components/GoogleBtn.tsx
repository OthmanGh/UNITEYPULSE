import { GoogleIcon } from '../../../utils/icons';

type GoogleBtnProps = {
  onSubmit: () => void;
  isLogin: boolean;
};

const GoogleBtn = ({ onSubmit, isLogin }: GoogleBtnProps) => {
  return (
    <button
      className="flex gap-4 justify-center items-center text-center mt-[-15px] bg-gray-800 hover:bg-half-transparent bg-opacity-70 text-gray-300 font-semibold w-full mx-auto h-[50px] rounded-md px-8 transition-all duration-300 hover:text-primary hover:text-opacity-90"
      onClick={onSubmit}
    >
      <GoogleIcon className="text-lg" />
      <p className="text-md">{isLogin ? 'Login with Google' : 'Sign up with Google'}</p>
    </button>
  );
};

export default GoogleBtn;
