import { Avatar } from '@mui/material';
import { useSocketContext } from '../../../../../contexts/SocketContext';
import useConversation from '../../../../../store/useConversations';

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  const { onlineUsers } = useSocketContext();

  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <div
      className={`flex flex-row gap-2 items-center hover:bg-secondary rounded p-2 py-1 cursor-pointer ${isSelected ? 'bg-secondary' : ''} `}
      onClick={() => setSelectedConversation(conversation)}
    >
      <div className={`avatar ${isOnline ? 'online' : ''}`}>
        <div className="w-12 rounded-full">
          <Avatar alt="Remy Sharp" src={conversation.profilePicture} className="" />
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
          <p className="font-bold text-gray-200">{conversation.username}</p>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1"></div>}
    </div>
  );
};

export default Conversation;
