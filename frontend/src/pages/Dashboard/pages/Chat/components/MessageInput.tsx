import { BsSend } from 'react-icons/bs';

const MessageInput = () => {
  return (
    <div className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="border block w-full  border-none outline-none bg-secondary bg-opacity-50 text-white h-[48px] focus:bg-opacity-100 transition-all px-4 duration-400 rounded-lg placeholder:text-[16px] text-[16px]"
          placeholder="Sent a message "
        />
        <button className="absolute inset-y-0 end-0 flex items-center pe-4 text-lg">
          <BsSend className="hover:text-gray-300" />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
