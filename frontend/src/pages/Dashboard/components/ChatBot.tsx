import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { IoSendSharp } from 'react-icons/io5';
import { Tooltip } from '@mui/material';

const ChatBot = () => {
  return (
    <section className="rounded-xl overflow-hidden">
      {/*'top'*/}
      <div className="flex items-center justify-between text-white font-semibold bg-secondary p-4 w-72 h-12">
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
      <div className="flex items-center bg-slate-300 p-4 h-12">
        <input className="w-full bg-transparent placeholder:text-slate-600 outline-none text-slate-700" placeholder="Type here to Chat" />
        <IoSendSharp className="text-slate-600" />
      </div>
    </section>
  );
};

export default ChatBot;
