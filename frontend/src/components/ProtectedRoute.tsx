import { PropsWithChildren, useEffect } from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

type ProtectedRouteProps = PropsWithChildren;

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { authUser } = useAuthContext();
  console.log(authUser);
  const navigator = useNavigate();

  useEffect(() => {
    authUser ? navigator('/dashboard') : navigator('/auth', { replace: true });
    // if (authUser === null) navigator('/auth', { replace: true });
  }, [authUser, navigator]);

  return children;
};

export default ProtectedRoute;
