import { useState } from 'react';
import { RequestMethod } from '../services/requestMethods';
import useConversation from '../store/useConversations';
import { API_BASE_URL } from '../utils';

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const token = JSON.parse(localStorage.getItem('authUser'))?.token;

  const sendMessage = async (message) => {
    setLoading(true);

    const url = `${API_BASE_URL}/messages/send/${selectedConversation._id}`;

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
