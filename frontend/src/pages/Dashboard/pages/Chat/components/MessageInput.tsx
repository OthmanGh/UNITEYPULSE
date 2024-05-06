import { useState } from 'react';
import { BsSend } from 'react-icons/bs';
import useSendMessage from '../../../../../hooks/useSendMessage';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message) return;

    await sendMessage(message);
    setMessage('');
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border block w-full  border-none outline-none bg-secondary bg-opacity-50 text-white h-[48px] focus:bg-opacity-100 transition-all px-4 duration-400 rounded-lg placeholder:text-[16px] text-[16px]"
          placeholder="Sent a message "
        />
        <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-4 text-lg">
          {loading ? <div className="loading loading-spinner"></div> : <BsSend className="hover:text-gray-300" />}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
