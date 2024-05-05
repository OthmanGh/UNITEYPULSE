import React from 'react';
import { BiLogOut } from 'react-icons/bi';
import useLogout from '../hooks/useLogout';

const LogoutBtn = () => {
  const { loading, logout } = useLogout();

  return <div className="mt-auto">{loading ? <BiLogOut onClick={logout} /> : <span className="loading loading-spinner"></span>}</div>;
};

export default LogoutBtn;
