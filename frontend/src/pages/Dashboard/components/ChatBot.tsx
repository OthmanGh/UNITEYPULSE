import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { IoSendSharp } from 'react-icons/io5';
import { Tooltip } from '@mui/material';
import { useAuthContext } from '../../../contexts/AuthContext';

const ChatBot = () => {
  const { authUser } = useAuthContext();

  return (
    <section className="rounded-xl overflow-hidden w-full shadow-md hover:scale-105 transition-all duration-500">
      {/*'top'*/}
      <div className="flex items-center justify-between text-white font-semibold bg-dark p-4 w-72 h-12">
        <p>Hi Othman</p>
        <p>
          <Tooltip title="close" placement="top">
            <RiArrowDownSLine className="text-2xl cursor-pointer" />
          </Tooltip>
        </p>
      </div>

      {/*'Chats'*/}
      <div
        className="h-[350px] bg-slate-100 p-4 flex items-start flex-col justify-end gap-4 overflow-y-scroll max-h-[400px] overscroll-behavior: auto;
"
      >
        <UserMessage />
        <UserMessage />
        <UserMessage />
        <UserMessage />
        <UserMessage />
        <UserMessage />
        <UserMessage />
        <UserMessage />
        <UserMessage />
        <UserMessage />
        <UserMessage />
        <UserMessage />
        <UserMessage />
      </div>

      {/*'send'*/}
      <div className="flex items-center bg-slate-300 p-4 h-12 ">
        <input className="w-full bg-transparent placeholder:text-slate-600 outline-none text-slate-700" placeholder="Type here to Chat" />

        <button type="submit">
          <IoSendSharp className="text-slate-600 text-xl hover:text-slate-700" />
        </button>
      </div>
    </section>
  );
};

const UserMessage = () => {
  return (
    <div className="flex items-center gap-2 chat-start">
      <div className="avatar">
        <div className="w-8 rounded-full">
          <img
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="chat-image"
          />
        </div>
      </div>

      <p className="chat-bubble px-2 text-white pb-2 text-[12px] self-center h-10">Hey there</p>
    </div>
  );
};

export default ChatBot;

const BotMessages = () => {};
