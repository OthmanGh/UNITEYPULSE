import { BackArrow } from '../../../utils/icons';

const BackBtn = () => {
  return (
    <div className="absolute top-5 left-10 px-3 py-2 rounded-xl cursor-pointer border-2 border-gray-300 transition-all duration-500 text-gray-300 hover:text-primary hover:border-primary">
      <BackArrow className="text-2xl" />
    </div>
  );
};

export default BackBtn;
