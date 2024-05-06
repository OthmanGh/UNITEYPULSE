import { Avatar } from '@mui/material';
import { useConversation } from '../../../../../contexts/ConversationContext';

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversations._id;

  return (
    <div
      className={`flex flex-row gap-2 items-center hover:bg-secondary rounded p-2 py-1 cursor-pointer ${isSelected ? 'bg-sky-500' : ''} `}
      onClick={() => setSelectedConversation(conversation)}
    >
      <div className="avatar ">
        <div className="w-12 rounded-full">
          <Avatar alt="Remy Sharp" src={conversation.profilePic} className="" />
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
          <p className="font-bold text-gray-200">{conversation.fullName}</p>
          <span className="text-xl">🙂</span>
        </div>
      </div>

      {lastIdx && <div className="divider my-0 py-0 h-1"></div>}
    </div>
  );
};

export default Conversation;
