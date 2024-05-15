import useGetConversations from '../../../../../hooks/useGetConversations';
import Conversation from './Conversation';

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="py-2 flex flex-col gap-2 bg-dark overflow-auto relative">
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : conversations && conversations.length > 0 ? (
        conversations.map((conversation, idx) => <Conversation key={conversation._id} conversation={conversation} lastIdx={idx} />)
      ) : (
        <p className="inset-0 text-white top-10 text-xl">No Current Users 😐</p>
      )}
    </div>
  );
};

export default Conversations;
