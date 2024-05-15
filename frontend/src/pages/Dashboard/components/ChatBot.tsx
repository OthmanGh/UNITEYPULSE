import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { IoSendSharp } from 'react-icons/io5';
import { Tooltip } from '@mui/material';

const ChatBot = () => {
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
      <div className="h-[350px] bg-slate-100">Messages</div>

      {/*'send'*/}
      <div className="flex items-center bg-slate-300 p-4 h-12 ">
        <input className="w-full bg-transparent placeholder:text-slate-600 outline-none text-slate-700" placeholder="Type here to Chat" />

        <button type="submit">
          <IoSendSharp className="text-slate-600 text-xl" />
        </button>
      </div>
    </section>
  );
};

export default ChatBot;
