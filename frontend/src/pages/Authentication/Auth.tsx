import { Link } from 'react-router-dom';
import { BackArrow, GoogleIcon } from '../../utils/icons';
import InputField from './components/InputField';
import { useState } from 'react';

const Auth = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  return (
    <section className="h-screen grid grid-cols-1 sm:grid-cols-2 items-center justify-center relative">
      {isLoggingIn ? (
        <div className="h-[40vh] sm:h-screen w-full bg-lightBlue flex flex-col items-center text-center justify-center gap-2">
          <h2 className="text-lg sm:text-3xl font-semibold">Welcome Back!</h2>
          <p className="sm:text-xl sm:max-w-[80%] px-2">To stay connected with us, please login with your personal info</p>
          <button
            className="mt-4 sm:mt-10 border-black border-2 rounded-lg px-6 sm:px-10 py-2 sm:py-3 hover:text-red-500 hover:border-red-500 transition-all duration-500"
            onClick={() => setIsLoggingIn(false)}
          >
            Log in
          </button>
        </div>
      ) : (
        <div className="h-[40vh] sm:h-screen w-full bg-lightBlue flex flex-col items-center text-center justify-center gap-2">
          <h2 className="text-lg sm:text-3xl font-semibold">Hello 👋</h2>
          <p className="sm:text-xl sm:max-w-[80%] px-2">Enter your personal details and start your journey with us</p>
          <button
            className="mt-4 sm:mt-10 border-black border-2 rounded-lg px-6 sm:px-10 py-2 sm:py-3 hover:text-red-500 hover:border-red-500 transition-all duration-500"
            onClick={() => setIsLoggingIn(true)}
          >
            Sign up
          </button>
        </div>
      )}

      {isLoggingIn ? (
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full w-full flex flex-col items-center justify-center p-5">
          <form className="flex flex-col items-start justify-center gap-4 w-[90%] sm:w-2/3">
            <h2 className="text-lg xs:text-2xl sm:text-3xl font-semibold">Log in</h2>

            <InputField name="email" id="email" placeholder="example@gmail.com" labelText="Email" type="email" classes="w-full" />

            <InputField name="password" id="password" placeholder="Pass1234.." labelText="Password" type="password" classes="w-full flex-2" />

            <span className="mt-[-12px] ml-1 text-[12px] text-gray-700 font-semibold cursor-pointer hover:text-secondary transition-all duration-500">
              Forgot your password?
            </span>
          </form>

          <div className="flex flex-col gap-5 mt-10 w-[90%] sm:w-2/3">
            <div className="flex gap-2 w-full mx-auto">
              <div className="bg-gray-300 flex-1 h-[2px] self-center"></div>
              <p className="text-gray-400">OR</p>
              <div className="bg-gray-300 flex-1 h-[2px] self-center"></div>
            </div>

            <button className="flex gap-1 justify-center items-center text-center mt-[-10px] bg-gray-300 w-full mx-auto h-[50px] rounded-[10px] px-8">
              <GoogleIcon className="text-sm" />
              <p className="text-md">Sign in with Google</p>
            </button>
          </div>

          <button className="mt-14 w-[60%] sm:w-2/3 mx-auto h-[50px] bg-primary rounded-[10px] text-white">Log in</button>
        </div>
      ) : (
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full w-full flex flex-col items-center justify-center p-5">
          <form className="flex flex-col items-start justify-center gap-4 w-[90%] sm:w-2/3">
            <h2 className="text-lg xs:text-2xl sm:text-3xl font-semibold">Create Account</h2>

            <InputField name="name" id="name" placeholder="Othman..." labelText="Name" type="text" classes="w-full" />

            <InputField name="username" id="username" placeholder="Othman..." labelText="Username" type="text" classes="w-full" />

            <InputField name="email" id="email" placeholder="example@gmail.com" labelText="Email" type="email" classes="w-full" />

            <InputField name="password" id="password" placeholder="Pass1234.." labelText="Password" type="password" classes="w-full flex-2" />
          </form>

          <div className="flex flex-col gap-5 mt-10 w-[90%] sm:w-2/3">
            <div className="flex gap-2 w-full mx-auto">
              <div className="bg-gray-300 flex-1 h-[2px] self-center"></div>
              <p className="text-gray-400">OR</p>
              <div className="bg-gray-300 flex-1 h-[2px] self-center"></div>
            </div>

            <button className="flex gap-1 justify-center items-center text-center bg-gray-300 w-full mx-auto h-[50px] rounded-[10px] px-8">
              <GoogleIcon className="text-sm" />
              <p className="text-md">Sign up with Google</p>
            </button>
          </div>

          <button className="mt-14 w-[60%] sm:w-2/3 mx-auto h-[50px] bg-primary rounded-[10px] text-white">Create Account</button>
        </div>
      )}

      <Link to="/">
        <div className="absolute top-5 left-10 bg-secondary text-white px-3 py-2 rounded-xl cursor-pointer border-2 border-secondary hover:border-secondary hover:bg-transparent hover:text-secondary transition-all duration-500">
          <BackArrow className="text-2xl" />
        </div>
      </Link>
    </section>
  );
};

export default Auth;
