import { PropsWithChildren, useEffect } from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

type ProtectedRouteProps = PropsWithChildren;

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { authUser } = useAuthContext();
  const navigator = useNavigate();

  useEffect(() => {
    if (!authUser) {
      navigator('/auth', { replace: true });
    }
  }, [authUser, navigator]);

  return children;
};

export default ProtectedRoute;
