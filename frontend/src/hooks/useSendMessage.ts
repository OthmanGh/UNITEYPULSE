import { useState } from 'react';
import { RequestMethod } from '../services/requestMethods';
import useConversation from '../store/useConversations';

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const token = JSON.parse(localStorage.getItem('authUser'))?.token;

  const sendMessage = async (message) => {
    if (!selectedConversation) {
      console.log('No conversation selected');
      return;
    }

    console.log(selectedConversation);

    const url = `http://127.0.0.1:8000/api/messages/send/${selectedConversation._id}`;

    setLoading(true);
    try {
      const res = await fetch(url, {
        method: RequestMethod.post,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
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
