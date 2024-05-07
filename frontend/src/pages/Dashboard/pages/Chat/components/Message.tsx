import { useAuthContext } from '../../../../../contexts/AuthContext';
import { useConversation } from '../../../../../contexts/ConversationContext';
import { convertTime } from '../../../../../utils/convertTime';
const Message = ({ message }) => {
  const { authUser } = useAuthContext();

  const { selectedConversation } = useConversation();

  const currentUserMessages = message.senderId === authUser._id;

  const chatClassName = currentUserMessages ? 'chat-end' : 'chat-start';

  const profilePic = currentUserMessages ? authUser.profilePic : selectedConversation?.profilePic;

  const formatedTime = convertTime(message.createdAt);

  const bgColor = currentUserMessages ? 'bg-blue-500' : '';

  const shakeClass = message.shake ? 'shake' : '';

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="chat" />
        </div>
      </div>

      <div className={`chat-bubble text-white ${shakeClass}  ${bgColor} pb-2`}>{message.message}</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formatedTime}</div>
    </div>
  );
};

export default Message;
