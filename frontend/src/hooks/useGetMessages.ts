import { useEffect, useState } from 'react';
import { useConversation } from '../contexts/ConversationContext';

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const url = `http://127.0.0.1:8000/api/messages/:${selectedConversation._id}`;

        const res = await fetch(url);

        const data = await res.jons();

        if (data.error) throw new Error(data.error);
        setMessages(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};

export default useGetMessages;
