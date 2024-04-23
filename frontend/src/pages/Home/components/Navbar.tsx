import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Logo } from '../../../constants';
import { navLinks } from '../../../constants';
import { Close, Menu } from '../../../constants/icons';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <nav className={`w-full flex p-6 justify-between items-center ${styles.navbar} border-b-2 border-opacity-60 border-lightBlue text-white  navbar h-20`}>
      <p className={`${styles.navbar} font-bold xs:text-xl sm:text-2xl md:text-3xl xl:text-4xl group transition-all duration-1000 hover:text-primary`}>
        Unity<span className="text-primary group-hover:text-white transition-all duration-1000">Pulse</span>
      </p>

      <ul className={`hidden sm:flex sm:text-lg gap-6 md:gap-12 md:text-xl text-lightBlue font-semibold`}>
        {navLinks.map((nav) => (
          <li key={nav.id} className="hover:cursor-pointer hover:text-primary transition-all duration-500 hover:scale-110 ">
            {nav.title}
          </li>
        ))}
      </ul>

      <button className="hidden xs:text-lg sm:text-xl md:text-2xl xl:text-3xl sm:flex border-2 border-transparent px-4 py-2 rounded-xl transition-all duration-500 hover:text-primary hover:border-primary hover:scale-110">
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

        <div className={`${toggle ? 'flex' : 'hidden'} absolute top-[82px] w-full left-[0%] flex flex-col items-center justify-center list-none`}>
          {navLinks.map((item, index) => {
            return (
              <li
                className=" bg-secondary transition-all duration-500 bg-opacity-40 text-center border-b-2 border-opacity-60  w-full py-4 border-b-lightBlue text-blue-100 hover:bg-opacity-100 hover:cursor-pointer hover:scale-105 font-semibold text-lg "
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
