import { useState } from 'react';
import { RequestMethod } from '../services/requestMethods';
import { useAuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const navigator = useNavigate();

  const logout = async () => {
    setLoading(true);

    try {
      const res = await fetch('http://127.0.0.1:8000/api/auth/logout', {
        method: RequestMethod.post,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      navigator('/');
      localStorage.removeItem('authUser');
      setAuthUser(null);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogout;
