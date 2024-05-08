import Message from './Message';
import useGetMessages from '../../../../../hooks/useGetMessages';
import MessageSkeleton from '../../../../../components/MessageSkeletons';
import { useEffect, useRef } from 'react';
import useListenMessages from '../../../../../hooks/useListenMessages';

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({
        behavior: 'smooth',
      });
    }, 100);
  }, []);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {messages && messages.length > 0 ? (
        messages.map((message, index) => (
          <div key={message._id} ref={index === messages.length - 1 ? lastMessageRef : null}>
            <Message message={message} />
          </div>
        ))
      ) : loading ? (
        [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)
      ) : (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
