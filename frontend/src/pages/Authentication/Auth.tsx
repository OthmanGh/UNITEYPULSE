import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SwitchBtn, Text, BackBtn } from './components';
import Overlay from '../../components/Overlay';
import Signup from './components/Signup';
import Login from './components/Login';

const Auth = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(true);

  const handleSwitch = () => {
    setIsLoggingIn((prev) => !prev);
  };

  return (
    <section className="h-screen grid grid-cols-1 sm:grid-cols-2 items-center justify-center relative">
      {!isLoggingIn ? (
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
      <Overlay opacity={70} bgColor="bg-black" />
    </section>
  );
};

export default Auth;
