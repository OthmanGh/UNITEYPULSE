import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RequestMethod } from '../services/requestMethods';
import { AUTH_API_BASE_URL } from '../utils';
import { useAuthContext } from '../contexts/AuthContext';

interface SignupData {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface SignupError {
  message: string;
}

interface SignupResponse {
  status: string;
  error?: string;
  data?: any;
}

const useSignup = () => {
  const navigator = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<SignupError | null>(null);
  const { setAuthUser } = useAuthContext();

  const signup = async (data: SignupData) => {
    setLoading(true);
    try {
      const url = `${AUTH_API_BASE_URL}/signup`;

      const req = await fetch(url, {
        method: RequestMethod.post,
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(data),
      });

      const res: SignupResponse = await req.json();
      setAuthUser(res);

      if (res.status === 'success') {
        localStorage.setItem('authUser', JSON.stringify(res.data));
        setAuthUser(res);
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

  return { loading, error, signup };
};

export default useSignup;
