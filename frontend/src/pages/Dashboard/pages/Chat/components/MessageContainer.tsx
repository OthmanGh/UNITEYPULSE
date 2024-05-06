import Messages from './Messages';
import MessageInput from './MessageInput';
import { TiMessages } from 'react-icons/ti';
import { useConversation } from '../../../../../contexts/ConversationContext';
import { useEffect } from 'react';

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
  const { selectedConversation, setSelectedConversation } = useConversation;

  const NoChatSelected = false;

  // useEffect(() => {
  //   return () => setSelectedConversation(null);
  // }, [selectedConversation]);

  return (
    <div className={`flex flex-col ${NoChatSelected ? 'bg-secondary bg-opacity-20' : ''}  flex-1 rounded-md`}>
      {selectedConversation ? (
        <NoChatSelectedComp />
      ) : (
        <>
          <div className="flex items-center gap-2 bg-secondary bg-opacity-50 h-[48px] rounded-lg mb-4 hover:bg-opacity-100 transition-all p-4   duration-400">
            <span className="label-text text-md"> To :</span>
            <span className="text-gray-300 font-bold">{selectedConversation?.name}</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;
