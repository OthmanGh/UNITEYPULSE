import Messages from './Messages';
import MessageInput from './MessageInput';
import { TiMessages } from 'react-icons/ti';

const NoChatSelectedComp = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 Othman Ghandour ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

const MessageContainer = () => {
  const NoChatSelected = true;

  return (
    <div className="flex flex-col bg-blue-600 flex-1">
      {NoChatSelected ? (
        <NoChatSelectedComp />
      ) : (
        <>
          <div className="bg-half-transparent px-4 py-2 mb-2">
            <span className="label-text"> To:</span>
            {''}
            <span className="text-gray-900 font-bold">Ali</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;
