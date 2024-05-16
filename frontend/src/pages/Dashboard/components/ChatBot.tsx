import React, { useEffect, useState, useRef } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { IoSendSharp } from 'react-icons/io5';
import { Tooltip } from '@mui/material';
import { useAuthContext } from '../../../contexts/AuthContext';
import { FaQuestion } from 'react-icons/fa';
import BotIcon from '../../../assets/aiBot.png';
import { RequestMethod } from '../../../services/requestMethods';

const ChatBot = () => {
  const { authUser } = useAuthContext();
  const [showChatbot, setShowChatbot] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      message: "Hello! I'm your friendly chatbot. How can I assist you today?",
      sender: 'bot',
    },
  ]);

  const token = JSON.parse(localStorage.getItem('authUser')).token;
  const userId = JSON.parse(localStorage.getItem('authUser'))._id;

  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    setMessages((prevMessages) => [...prevMessages, { message: inputMessage, sender: 'user' }]);
    setInputMessage('');

    try {
      const response = await fetch('http://127.0.0.1:8000/api/chatbot', {
        method: RequestMethod.post,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userId,
          message: inputMessage,
        }),
      });
      const data = await response.json();

      setMessages((prevMessages) => [...prevMessages, { message: data.message, sender: 'bot' }]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div>
      {showChatbot ? (
        <section className="rounded-xl overflow-hidden w-full shadow-md hover:scale-105 transition-all duration-500">
          {/*'top'*/}
          <div className="flex items-center justify-between text-white font-semibold bg-dark p-4 w-72 h-12">
            <p>Hi {authUser?.name?.split(' ')[0]} 😁</p>

            <Tooltip title="Close" placement="bottom">
              <RiArrowDownSLine className="text-2xl cursor-pointer hover:text-primary transition-all duration-500" onClick={() => setShowChatbot(false)} />
            </Tooltip>
          </div>

          {/*'Chats'*/}
          <div className="h-[350px] overflow-scroll flex flex-col-reverse gap-4 bg-slate-100 px-2" ref={chatContainerRef}>
            {messages
              .slice(0)
              .reverse()
              .map((msg, index) => {
                if (msg.sender === 'user') {
                  return <UserMessage key={index} message={msg.message} />;
                } else {
                  return <BotMessages key={index} message={msg.message} />;
                }
              })}
          </div>

          {/*'send'*/}
          <div className="flex items-center bg-slate-300 p-4 h-12">
            <input
              className="w-full bg-transparent placeholder:text-slate-600 outline-none text-slate-700"
              placeholder="Type here to Chat"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
            />

            <button type="submit" onClick={sendMessage}>
              <IoSendSharp className="text-slate-600 text-xl hover:text-slate-700" />
            </button>
          </div>
        </section>
      ) : (
        <SwitchBtn onSwitch={() => setShowChatbot(true)} />
      )}
    </div>
  );
};

export default ChatBot;

type SwitchBtnProps = {
  onSwitch: () => void;
};

const SwitchBtn = ({ onSwitch }: SwitchBtnProps) => {
  return (
    <div className="hover:scale-105 transition-all duration-500">
      <Tooltip title="help?" placement="top">
        <button
          className="bg-dark p-4 rounded-full shadow-2xl hover:bg-transparent hover:border-dark border-2 hover:text-dark border-dark transition-all duration-500 text-white"
          type="button"
          onClick={onSwitch}
        >
          <FaQuestion className="text-3xl" />
        </button>
      </Tooltip>
    </div>
  );
};

const UserMessage = ({ message }: { message: string }) => {
  return (
    <div className="chat chat-start flex">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="User Avatar" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>

      <div className="chat-bubble text-sm self-center pt-3 px-2">
        <p className="w-[180px] text-gray-200 font-normal leading-5">{message}</p>
      </div>
    </div>
  );
};

const BotMessages = ({ message }: { message: string }) => {
  return (
    <div className="chat chat-end flex-reverse">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Bot Avatar" src={BotIcon} />
        </div>
      </div>
      <div className="chat-bubble chat-bubble-accent text-sm pt-3">
        <p className="w-[180px] font-semibold text-zinc-900">{message}</p>
      </div>
    </div>
  );
};
