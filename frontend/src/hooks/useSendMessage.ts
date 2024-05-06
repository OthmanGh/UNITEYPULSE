import { useState } from 'react';
import { useConversation } from '../contexts/ConversationContext';
import { RequestMethod } from '../services/requestMethods';

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    const url = `http://127.0.0.1:8000/api/messages/send/${selectedConversation?._id}`;

    setLoading(true);
    try {
      const res = await fetch(url, {
        method: RequestMethod.post,
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({ message }),
      });

      const data = await res.json();

      if (data.error) throw new Error(data.error);

      setMessages([...messages, data]);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
