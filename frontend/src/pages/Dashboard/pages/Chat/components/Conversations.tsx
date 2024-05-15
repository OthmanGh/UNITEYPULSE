import useGetConversations from '../../../../../hooks/useGetConversations';
import Conversation from './Conversation';
import { useAuthContext } from '../../../../../contexts/AuthContext';

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  const { authUser } = useAuthContext();

  console.log(conversations);

  return (
    <div className="py-2 flex flex-col gap-2 bg-dark overflow-auto relative">
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : conversations && conversations.length > 0 ? (
        conversations.map((conversation, idx) => <Conversation key={conversation._id} conversation={conversation} currentUser={authUser._id} lastIdx={idx} />)
      ) : (
        <p className="absolute z-20 inset-0 text-black text-xl">No Current Users</p>
      )}
    </div>
  );
};

export default Conversations;
