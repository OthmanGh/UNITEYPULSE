import { GoogleBtn, OrLine, SubmitBtn, Header } from './';
import InputField from './../components/InputField';
import { RequestMethod } from '../../../services/requestMethods';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = `http://127.0.0.1:8000/api/auth`;

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
  const navigator = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    watch,
  } = useForm({ resolver: zodResolver(SignupSchema) });

  const password = watch('password', '');

  const onSubmit = async (data) => {
    try {
      const url = `${API_BASE_URL}/signup`;
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
        throw new Error(res.error);
      }
    } catch (error) {
      setError('root', {
        message: error.message,
      });
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

      {errors.root && <span className="text-red-500 text-sm mt-2">{errors.root.message}</span>}
    </div>
  );
};

export default Signup;
