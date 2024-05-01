import { Link, NavLink } from 'react-router-dom';
import { Tooltip } from '@mui/material';
import { CloseIcon } from '../../../utils/icons';
import { links } from '../../../constants';
import { useStateContext } from '../../../contexts/ContextProvider';
import Logo from './../../../assets/Logo.png';

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();
  const activeLink = 'flex itemes-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white bg-secondary text-md m-2';

  const normalLink =
    'flex itemes-center justify-start gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-whtie text-slate-900"
            >
              <img src={Logo} className="w-[25%]" alt="" />
              <p className="text-lg">
                <span>UNITY</span> <span className="text-secondary">PAULSE</span>
              </p>
            </Link>

            <Tooltip title="Menu" placement="bottom">
              <button
                className="button text-[3rem] rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
                onClick={() => setActiveMenu((prev: boolean) => !prev)}
              >
                <CloseIcon />
              </button>
            </Tooltip>
          </div>

          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase flex items-center">{item.title}</p>

                {item.links.map((link) => (
                  <NavLink
                    to={`/dashboard/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    <div className="self-center">{link.icon}</div>
                    <span className="captitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
