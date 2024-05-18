import { useEffect, useState } from 'react';
import { API_BASE_URI } from '../utils';

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('authUser'))?.token;

    if (!token) {
      return;
    }

    const getConversations = async () => {
      setLoading(true);

      try {
        const res = await fetch(`${API_BASE_URI}/users`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();

        console.log(data);
        setConversations(data);
        if (data.error) {
          throw new Error(data.error);
        }
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return { loading, conversations };
};

export default useGetConversations;
