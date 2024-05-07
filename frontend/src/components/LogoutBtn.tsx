import { CiLogout } from 'react-icons/ci';
import useLogout from '../hooks/useLogout';

const LogoutBtn = () => {
  const { logout } = useLogout();

  return (
    <div className="mt-auto">
      <CiLogout onClick={logout} />
    </div>
  );
};

export default LogoutBtn;
