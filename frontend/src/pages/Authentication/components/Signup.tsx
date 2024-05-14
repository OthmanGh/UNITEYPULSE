import { GoogleBtn, OrLine, SubmitBtn, Header } from './';
import InputField from './../components/InputField';
import { useForm } from 'react-hook-form';
import useSignup from '../../../hooks/useSignup';
import { SignupSchema } from '../../../utils/validation';
import { zodResolver } from '@hookform/resolvers/zod';

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm({ resolver: zodResolver(SignupSchema) });

  const { loading, error, signup } = useSignup();

  const password = watch('password', '');

  const onSubmit = async (data) => {
    await signup(data);
  };

  const handleGoogleAuthSubmit = () => {};

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
        <GoogleBtn onSubmit={handleGoogleAuthSubmit} isLogin={false} />
      </div>

      <SubmitBtn text="Create Account" isSubmitting={isSubmitting || loading} onSubmit={handleSubmit(onSubmit)} />

      {error && <span className="text-red-500 text-sm mt-2">{error.message}</span>}
    </div>
  );
};

export default Signup;
