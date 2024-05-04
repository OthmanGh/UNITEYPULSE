import React from 'react';
import { Avatar } from '@mui/material';
const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <Avatar />
        </div>
      </div>

      <div className={'chat-bubble text-white bg-blue-500'}>Hi! What is upp?</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">10:34</div>
    </div>
  );
};

export default Message;
