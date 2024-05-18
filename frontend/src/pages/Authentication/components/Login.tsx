import { useForm } from 'react-hook-form';
import { GoogleBtn, OrLine, SubmitBtn, Header } from './';
import InputField from './InputField';
import useLogin from '../../../hooks/useLogin';
import { LoginSchema } from '../../../utils/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useGoogleLogin } from '@react-oauth/google';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuthContext } from '../../../contexts/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { loading, error, login } = useLogin();
  const { authUser } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(LoginSchema) });

  const onSubmit = async (data) => {
    await login(data);
  };

  const handleGoogleAuthSubmit = async (response) => {
    try {
      const userInfoResponse = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo', {
        headers: {
          Authorization: `Bearer ${response.access_token}`,
        },
      });

      const googleData = {
        email: userInfoResponse.data.email,
        googleId: userInfoResponse.data.id,
      };

      await login(googleData);
      navigate('/dashboard');
    } catch (error) {
      console.log('Error occurred while logging in with Google:', error);
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: handleGoogleAuthSubmit,
    onError: (error) => console.log('Google Login Failed:', error),
  });

  useEffect(() => {
    if (authUser) {
      navigate('/dashboard');
    }
  }, [authUser]);

  return (
    <div className=" h-full w-full flex flex-col items-center justify-center p-5 bg-auth text-light-gray z-10">
      <form className="flex flex-col items-start justify-center gap-4 w-[90%] sm:w-2/3" onSubmit={handleSubmit(onSubmit)}>
        <Header text="Login" />

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

        <span className="mt-[-12px] ml-1 text-[12px] text-primary text-opacity-50 hover:text-opacity-100 font-semibold cursor-pointer transition-all duration-500">
          Forgot your password?
        </span>

        <div className="flex flex-col gap-4 mt-10 w-[100%]">
          <OrLine />
          <GoogleBtn isLogin={true} onSubmit={() => loginWithGoogle()} />
        </div>

        <SubmitBtn text="Login" isSubmitting={isSubmitting || loading} onSubmit={handleSubmit(onSubmit)} />

        {error && <span className="text-red-500 text-sm mx-auto">{error.message}</span>}
      </form>
    </div>
  );
};

export default Login;
