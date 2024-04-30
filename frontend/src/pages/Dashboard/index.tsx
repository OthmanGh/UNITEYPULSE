import Tooltip from '@mui/material/Tooltip';
import { SettingsIcon } from '../../constants/icons';
import { Navbar, Sidebar } from '../../utils/index';
import { useStateContext } from '../../contexts/ContextProvider';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  const { activeMenu } = useStateContext();
  return (
    <div>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4">
          <Tooltip title="Settings" placement="top">
            <button
              className="cursor-pointer text-3xl p-3 hover:drop-shadow-xl text-white hover:bg-light-gray rounded-3xl"
              type="button"
              style={{ background: 'blue' }}
            >
              <SettingsIcon />
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
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg w-full navbar">
            <Navbar />
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
