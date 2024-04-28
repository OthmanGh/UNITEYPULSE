import { GoogleIcon } from '../../constants/icons';

const Auth = () => {
  return (
    <section className="h-screen grid grid-cols-1 sm:grid-cols-2 items-center justify-center">
      <div className="h-screen w-full bg-lightBlue flex flex-col items-center text-center justify-center gap-2">
        <h2 className="text-3xl font-semibold">Welcome Back!</h2>
        <p className="text-xl max-w-[80%]">To keep connected with us please login with your personal info</p>
        <button className="mt-10 border-black border-2 rounded-lg px-10 py-3 hover:text-red-500 hover:border-red-500 transition-all duration-500 ">
          Sign in
        </button>
      </div>

      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full w-full flex flex-col  justify-center">
        <form className=" flex flex-col items-center justify-center gap-4">
          <h2 className="text-3xl font-semibold">Create Account</h2>

          <div className="flex gap-2 flex-1">
            <fieldset className="flex flex-col gap-1 flex-1">
              <label htmlFor="id" className="font-semibold">
                Name
              </label>
              <input type="text" name="name" placeholder="Othman..." className="h-[50px] px-4 rounded-[10px]" />
            </fieldset>

            <fieldset className="flex flex-col gap-1 flex-1">
              <label htmlFor="username">Username</label>
              <input id="username" type="text" name="username" placeholder="Othman..." className="h-[50px] px-4 rounded-[10px]" />
            </fieldset>
          </div>

          <fieldset className="flex flex-col gap-1 w-2/3">
            <label htmlFor="email">Email</label>
            <input id="email" type="text" name="email" placeholder="example@gmail.com" className="h-[50px] px-4 rounded-[10px]" />
          </fieldset>

          <fieldset className="flex flex-col gap-1 w-2/3">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" name="password" placeholder="Pass1234" className="h-[50px] px-4 rounded-[10px]" />
          </fieldset>

          <fieldset className="flex flex-col gap-1 w-2/3 mt-[-10px]">
            <label htmlFor="conditions" className="flex items-center gap-1 ml-1">
              <input id="conditions" type="checkbox" />
              <p className="text-sm font-semidbold">Accept Terms and conditions</p>
            </label>
          </fieldset>
        </form>

        <div className="flex flex-col gap-5 mt-10">
          <div className="flex gap-2 w-2/3 mx-auto">
            <div className="bg-gray-300 flex-1 h-[2px] self-center"></div>
            <p className="text-gray-400">OR</p>
            <div className="bg-gray-300 flex-1 h-[2px] self-center"></div>
          </div>

          <button className="flex gap-1 justify-center items-center text-center bg-gray-300 w-2/3 mx-auto h-[50px] rounded-[10px]">
            <GoogleIcon />
            <p>Sign up with google</p>
          </button>
        </div>

        <button className="mt-10 w-2/3 mx-auto h-[50px] bg-primary rounded-[10px] text-white">Create Account</button>
      </div>
    </section>
  );
};

export default Auth;
