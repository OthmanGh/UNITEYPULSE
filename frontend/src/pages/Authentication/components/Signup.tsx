import { GoogleBtn, OrLine, SubmitBtn, Header } from './';
import InputField from './../components/InputField';
import { useForm } from 'react-hook-form';
import useSignup from '../../../hooks/useSignup';
import { SignupSchema } from '../../../utils/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { TokenResponse, useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../../contexts/AuthContext';
import { API_BASE_URI } from '../../../utils';

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm({ resolver: zodResolver(SignupSchema) });

  const { loading, error, signup } = useSignup();

  const password = watch('password', '');

  const { setAuthUser } = useAuthContext();

  const onSubmit = async (data) => {
    await signup(data);
  };

  const [profile, setProfile] = useState<any>();
  const [user, setUser] = useState<Omit<TokenResponse, 'error' | 'error_description' | 'error_uri'>>();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse as any),
    onError: (error) => console.log('Login Failed:', error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json',
          },
        })
        .then((res) => {
          setProfile(res);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  useEffect(() => {
    const login = async () => {
      const repsonse = await axios.post(`${API_BASE_URI}/auth/signup`, {
        email: profile.data.email,
        name: profile.data.name,
        profilePicture: profile.data.picture,
        username: `${Date.now()}_${profile.data.name}`,
        role: 'owner',
      });

      setAuthUser(repsonse.data.data);
      navigate('/infos');
      localStorage.setItem('authUser', JSON.stringify({ status: 'success', ...repsonse.data.data }));
    };

    if (profile) {
      login();
    }
  }, [profile]);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-5 bg-auth text-gray-50 z-10">
      <form className="flex flex-col items-start justify-center gap-4 w-[90%] sm:w-2/3" onSubmit={handleSubmit(onSubmit)}>
        <Header text="Create Account" />

        <div className="flex w-full gap-2">
          <InputField
            name="name"
            id="name"
            placeholder="Othman..."
            labelText="Name"
            type="text"
            classes="w-full"
            register={register}
            required
            error={errors.name}
          />

          <InputField
            name="username"
            id="username"
            placeholder="Othman..."
            labelText="Username"
            type="text"
            classes="w-full"
            register={register}
            required
            error={errors.username}
          />
        </div>

        <InputField
          name="email"
          id="email"
          placeholder="example@gmail.com"
          labelText="Email"
          type="email"
          classes="w-full"
          register={register}
          required
          error={errors.email}
        />

        <InputField
          name="password"
          id="password"
          placeholder="Pass1234.."
          labelText="Password"
          type="password"
          classes="w-full flex-2"
          register={register}
          required
          error={errors.password}
        />

        <InputField
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Pass1234.."
          labelText="Confirm Password"
          type="password"
          classes="w-full flex-2"
          register={register}
          required
          error={errors.confirmPassword}
        />
        {!isSubmitting && errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}
        {password !== '' && password !== watch('confirmPassword') && <span className="text-red-500 text-sm mt-[-10px]">Passwords don't match</span>}
      </form>

      <div className="flex flex-col gap-5 mt-10 w-[90%] sm:w-2/3">
        <OrLine />
        <GoogleBtn onSubmit={() => login()} isLogin={false} />
      </div>

      <SubmitBtn text="Create Account" isSubmitting={isSubmitting || loading} onSubmit={handleSubmit(onSubmit)} />

      {error && <span className="text-red-500 text-sm mt-2">{error.message}</span>}
    </div>
  );
};

export default Signup;
