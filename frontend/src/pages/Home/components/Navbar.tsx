import { useState } from 'react';
import styles from './Navbar.module.css';
import { navLinks } from '../../../constants';
import { Close, Menu } from '../../../constants/icons';
import shortStyles from '../../../components/index';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <nav className={`w-full p-6 ${shortStyles.flexBetween} border-b-2 border-opacity-60 border-lightBlue text-white  navbar h-20`}>
      <p className={`${styles.navbar} font-bold ${shortStyles.linksFonts} group ${shortStyles.transition} hover:text-primary`}>
        Unity<span className={`text-primary group-hover:text-white ${shortStyles.transition}`}>Pulse</span>
      </p>

      <ul className={`hidden sm:flex sm:text-lg gap-6 md:gap-12 md:text-xl text-lightBlue font-semibold`}>
        {navLinks.map((nav) => (
          <li key={nav.id} className={`${shortStyles.pointer} hover:text-primary ${shortStyles.transition} ${shortStyles.hoverScale}`}>
            {nav.title}
          </li>
        ))}
      </ul>

      <button
        className={`hidden ${shortStyles.linksFonts} sm:flex border-2 border-transparent px-4 py-2 rounded-xl ${shortStyles.transition} hover:text-primary hover:border-primary ${shortStyles.hoverScale}`}
      >
        Signup/Login
      </button>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        {toggle ? (
          <button>
            <Close onClick={handleToggle} className={styles.icons} />
          </button>
        ) : (
          <button onClick={handleToggle}>
            <Menu className={styles.icons} />
          </button>
        )}

        <div className={`${toggle ? 'flex' : 'hidden'} absolute top-[82px] w-full left-[0%] ${shortStyles.flexCenter} flex-col list-none`}>
          {navLinks.map((item) => {
            return (
              <li
                className={` bg-secondary ${shortStyles.transition} bg-opacity-40 text-center border-b-2 border-opacity-60 w-full py-4 border-b-lightBlue text-blue-100 hover:bg-opacity-100 ${shortStyles.pointer} ${shortStyles.hoverScale} font-semibold text-lg`}
                key={item.id}
              >
                {item.title}
              </li>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
