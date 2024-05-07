import Tooltip from '@mui/material/Tooltip';
import { Navbar, Sidebar } from '../../utils/index';
import { useStateContext } from '../../contexts/ContextProvider';
import { Outlet } from 'react-router-dom';
import LogoutBtn from '../../components/LogoutBtn';

const Dashboard = () => {
  const { activeMenu } = useStateContext();
  return (
    <div>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4  z-20">
          <Tooltip title="Logout" placement="top">
            <button
              className="cursor-pointer text-2xl p-3 hover:drop-shadow-xl text-white  hover:bg-transparent hover:text-secondary rounded-full bg-secondary font-bold border-2 border-secondary transition-all duration-500"
              type="button"
              // style={{ background: 'blue' }}
            >
              <LogoutBtn />
            </button>
          </Tooltip>
        </div>

        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-main-bg">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg ">
            <Sidebar />
          </div>
        )}

        <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'} `}>
          <div>
            <Navbar />
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
