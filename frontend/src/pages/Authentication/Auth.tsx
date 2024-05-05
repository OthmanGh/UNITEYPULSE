import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { GoogleBtn, OrLine, SwitchBtn, Text, BackBtn, SubmitBtn, Header } from './components';
import InputField from './components/InputField';
import fetchAuthRes from '../../services/auth.api';
import { RequestMethod } from '../../services/requestMethods';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Overlay from '../../components/Overlay';

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const SignupSchema = z.object({
  name: z.string().min(2).max(50),
  username: z
    .string()
    .min(5)
    .max(20)
    .regex(/^[a-zA-Z0-9_]+$/),
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string(),
});

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm({ resolver: zodResolver(SignupSchema) });

  const password = watch('password', '');

  const onSubmit = async (data) => {
    try {
      const res = await fetchAuthRes(data, 'signup', RequestMethod.POST);
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message);
      } else {
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-5 bg-dark text-gray-50 z-10">
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
        <GoogleBtn />
      </div>

      <SubmitBtn text="Create Account" isSubmitting={isSubmitting} onSubmit={handleSubmit(onSubmit)} />

      {errors.root && <span className="text-red-500">{errors.root.message}</span>}
    </div>
  );
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(LoginSchema) });

  const onSubmit = async (data) => {
    try {
      const res = await fetchAuthRes(data, 'login', RequestMethod.POST);
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message);
      } else {
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" h-full w-full flex flex-col items-center justify-center p-5 bg-dark text-light-gray z-10">
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
          <GoogleBtn />
        </div>

        <SubmitBtn text="Login" isSubmitting={isSubmitting} onSubmit={handleSubmit(onSubmit)} />

        {errors.root && <span className="text-red-500 text-sm">{errors.root.message}</span>}
      </form>
    </div>
  );
};

const Auth = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(true);

  const handleSwitch = () => {
    setIsLoggingIn((prev) => !prev);
  };

  return (
    <section className="h-screen grid grid-cols-1 sm:grid-cols-2 items-center justify-center relative">
      {isLoggingIn ? (
        <div className="h-[40vh] sm:h-screen w-full bg-lightBlue flex flex-col items-center text-center justify-center gap-2 relative bg-bg2 bg-no-repeat bg-cover object-fit text-gray-300">
          <Text title="Welcome Back!" para="To stay connected with us, please login with your personal info" />
          <SwitchBtn text="Login" onClick={handleSwitch} />
        </div>
      ) : (
        <div className="h-[40vh] sm:h-screen w-full bg-lightBlue flex flex-col items-center text-center justify-center gap-2 bg-bg1 bg-no-repeat bg-cover text-gray-300 relative ">
          <Text para="Enter your personal details and start your journey with us" title="Hello 👋" />
          <SwitchBtn text="Sign Up" onClick={handleSwitch} />
        </div>
      )}

      {isLoggingIn ? <Login /> : <Signup />}

      <Link to="/" className="z-10">
        <BackBtn />
      </Link>
      <Overlay />
    </section>
  );
};

export default Auth;
