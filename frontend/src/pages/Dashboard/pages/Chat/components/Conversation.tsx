import { Avatar } from '@mui/material';

const Conversation = () => {
  return (
    <div className="flex flex-row gap-2 items-center hover:bg-secondary rounded p-2 py-1 cursor-pointer">
      <div className="avatar ">
        <div className="w-12 rounded-full">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className="" />
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
          <p className="font-bold text-gray-200">Othman Ghandour</p>
          <span className="text-xl">🙂</span>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1"></div>
    </div>
  );
};

export default Conversation;
