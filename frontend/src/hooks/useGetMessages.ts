import { useEffect, useState } from 'react';
import useConversation from '../store/useConversations';

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const token = JSON.parse(localStorage.getItem('authUser')).token;

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const url = `http://127.0.0.1:8000/api/messages/${selectedConversation._id}`;

        const res = await fetch(url, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (data.error) throw new Error(data.error);
        setMessages(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages, token]);

  return { messages, loading };
};

export default useGetMessages;
