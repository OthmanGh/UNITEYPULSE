import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RequestMethod } from '../services/requestMethods';
import { AUTH_API_BASE_URL } from '../utils';
import { useAuthContext } from '../contexts/AuthContext';

interface LoginData {
  email: string;
  password: string;
}

interface LoginError {
  message: string;
}

interface LoginResponse {
  status: string;
  error?: string;
  data?: any;
}

const useLogin = () => {
  const navigator = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<LoginError | null>(null);
  const { setAuthUser } = useAuthContext();

  const login = async (data: LoginData) => {
    setLoading(true);

    try {
      const url = `${AUTH_API_BASE_URL}/login`;

      const req = await fetch(url, {
        method: RequestMethod.post,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const res: LoginResponse = await req.json();
      console.log(res);

      if (res.status === 'success') {
        localStorage.setItem('authUser', JSON.stringify(res.data));
        setAuthUser(res.data);

        navigator('/dashboard');
      } else {
        throw new Error(res.error);
      }
    } catch (error) {
      setError({ message: error.message });
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, login };
};

export default useLogin;
