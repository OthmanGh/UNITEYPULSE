import { useAuthContext } from '../../../contexts/AuthContext';

const Greet = () => {
  const { authUser } = useAuthContext();

  console.log(authUser);
  return (
    <div className="flex items-center justify-center mt-20 w-[60%] mx-auto text-center">
      <h2 className="text-3xl text-gray-400">
        Welcome <span className="text-secondary font-bold ">Back</span>, To Your Essential Business Toolkit for Growth and Success
      </h2>
    </div>
  );
};

export default Greet;

// {authUser?.name[0].toUpperCase() + authUser?.name.slice(1).toLowerCase()}
