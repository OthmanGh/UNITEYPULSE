import { useForm } from 'react-hook-form';
import { GoogleBtn, OrLine, SubmitBtn, Header } from './';
import InputField from './InputField';
import { RequestMethod } from '../../../services/requestMethods';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = `http://127.0.0.1:8000/api/auth`;

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const Login = () => {
  const navigator = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(LoginSchema) });

  const onSubmit = async (data) => {
    try {
      const url = `${API_BASE_URL}/login`;
      const req = await fetch(url, {
        method: RequestMethod.post,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const res = await req.json();
      if (res.status === 'success') {
        navigator('/dashboard');
      } else {
        throw new Error(res.message);
      }
    } catch (error) {
      setError('root', {
        message: error.message,
      });
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

        {errors.root && <span className="text-red-500 text-sm mx-auto">{errors.root.message}</span>}
      </form>
    </div>
  );
};

export default Login;
