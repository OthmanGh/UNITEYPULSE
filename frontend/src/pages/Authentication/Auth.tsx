import { Link } from 'react-router-dom';
import InputField from './components/InputField';
import { useState } from 'react';
import Overlay from '../../components/Overlay';
import { GoogleBtn, OrLine, SwitchBtn, Text, BackBtn, SubmitBtn, Header } from './components';

const Auth = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleSwitch = () => {
    setIsLoggingIn((prev) => !prev);
  };

  const handleSubmit = () => {};

  return (
    <section className="h-screen grid grid-cols-1 sm:grid-cols-2 items-center justify-center relative">
      {isLoggingIn ? (
        <div className="h-[40vh] sm:h-screen w-full bg-lightBlue flex flex-col items-center text-center justify-center gap-2 relative bg-bg2 bg-no-repeat bg-cover object-fit text-gray-300">
          <Text title="Welcome Back!" para="To stay connected with us, please login with your personal info" />
          <SwitchBtn text="Login" onClick={handleSwitch} />

          <Overlay />
        </div>
      ) : (
        <div className="h-[40vh] sm:h-screen w-full bg-lightBlue flex flex-col items-center text-center justify-center gap-2 bg-bg1 bg-no-repeat bg-cover text-gray-300 relative ">
          <Text para="Enter your personal details and start your journey with us" title="Hello 👋" />
          <SwitchBtn text="Sign Up" onClick={handleSwitch} />
          <Overlay />
        </div>
      )}

      {isLoggingIn ? (
        <div className=" h-full w-full flex flex-col items-center justify-center p-5 bg-dark text-light-gray ">
          <form className="flex flex-col items-start justify-center gap-4 w-[90%] sm:w-2/3">
            <Header text="Login" />

            <InputField name="email" id="email" placeholder="example@gmail.com" labelText="Email" type="email" classes="w-full" />

            <InputField name="password" id="password" placeholder="Pass1234.." labelText="Password" type="password" classes="w-full flex-2" />

            <span className="mt-[-12px] ml-1 text-[12px] text-primary text-opacity-50 hover:text-opacity-100 font-semibold cursor-pointer transition-all duration-500">
              Forgot your password?
            </span>
          </form>

          <div className="flex flex-col gap-5 mt-10 w-[90%] sm:w-2/3">
            <OrLine />
            <GoogleBtn />
          </div>

          <SubmitBtn text="Login" onSubmit={handleSubmit} />
        </div>
      ) : (
        <div className="h-full w-full flex flex-col items-center justify-center p-5 bg-dark text-gray-50">
          <form className="flex flex-col items-start justify-center gap-4 w-[90%] sm:w-2/3">
            <Header text="Create Account" />

            <div className="flex w-full gap-2">
              <InputField name="name" id="name" placeholder="Othman..." labelText="Name" type="text" classes="w-full" />

              <InputField name="username" id="username" placeholder="Othman..." labelText="Username" type="text" classes="w-full" />
            </div>

            <InputField name="email" id="email" placeholder="example@gmail.com" labelText="Email" type="email" classes="w-full" />

            <InputField name="password" id="password" placeholder="Pass1234.." labelText="Password" type="password" classes="w-full flex-2" />

            <InputField
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Pass1234.."
              labelText="Confirm Password"
              type="password"
              classes="w-full flex-2"
            />
          </form>

          <div className="flex flex-col gap-5 mt-10 w-[90%] sm:w-2/3">
            <OrLine />
            <GoogleBtn />
          </div>

          <SubmitBtn text="Create Account" onSubmit={handleSubmit} />
        </div>
      )}

      <Link to="/">
        <BackBtn />
      </Link>
    </section>
  );
};

export default Auth;
