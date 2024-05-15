import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { IoSendSharp } from 'react-icons/io5';
import { Tooltip } from '@mui/material';
import { useAuthContext } from '../../../contexts/AuthContext';
import BotIcon from '../../../assets/aiBot.png';
import { TbMessageChatbot } from 'react-icons/tb';

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
      <div className="h-[350px] overflow-scroll flex flex-col-reverse gap-4 bg-slate-100 px-2">
        <UserMessage />
        <BotMessages />
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

export default ChatBot;

const UserMessage = () => {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>

      <div className="chat-bubble text-sm self-center pt-3 px-2">
        <p className=" w-[180px] text-gray-200 font-normal leading-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel corporis voluptas ab inventore, earum modi deleniti saepe voluptate aperiam alias.
        </p>
      </div>
    </div>
  );
};

const BotMessages = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={BotIcon} />
        </div>
      </div>
      <div className="chat-bubble chat-bubble-accent text-sm pt-3">
        <p className="w-[180px] font-semibold text-zinc-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, omnis!</p>
      </div>
    </div>
  );
};
