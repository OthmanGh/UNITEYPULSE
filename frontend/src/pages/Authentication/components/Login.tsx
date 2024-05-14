import { useForm } from 'react-hook-form';
import { GoogleBtn, OrLine, SubmitBtn, Header } from './';
import InputField from './InputField';
import useLogin from '../../../hooks/useLogin';
import { LoginSchema } from '../../../utils/validation';
import { zodResolver } from '@hookform/resolvers/zod';

const Login = () => {
  const { loading, error, login } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(LoginSchema) });

  const onSubmit = async (data) => {
    await login(data);
  };

  const handleGoogleAuthSubmit = (authState) => {
    console.log(authState);
  };

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
          <GoogleBtn isLogin={true} onSubmit={() => handleGoogleAuthSubmit('login')} />
        </div>

        <SubmitBtn text="Login" isSubmitting={isSubmitting || loading} onSubmit={handleSubmit(onSubmit)} />

        {error && <span className="text-red-500 text-sm mx-auto">{error.message}</span>}
      </form>
    </div>
  );
};

export default Login;
