import React from 'react';
import LogoTitle from './LogoTitle';
import NavLinkItem from './NavLinkItem';
import shortStyles from '../../../../../components/index';
import { navLinks } from '../../../../../constants';
import LoginBtn from './LoginBtn';
import { Link } from 'react-router-dom';
import { Close, Menu } from '../../../../../utils/icons';
import { motion } from 'framer-motion';

const ScrolledNavbar = ({ handleToggle, toggle }: { toggle: boolean; handleToggle: () => void }) => (
  <motion.nav
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    className={`w-full px-6 ${shortStyles.flexBetween} bg-dark fixed top-0 left-0 right-0  text-white z-30 gap-8 md:gap-12 h-[70px]`}
  >
    <LogoTitle />

    <ul className="hidden sm:flex gap-8 md:gap-12 text-sm sm:text-[14px] md:text-[16px] ">
      {navLinks.map((nav) => (
        <NavLinkItem key={nav.id} {...nav} />
      ))}
    </ul>

    <LoginBtn handleToggle={handleToggle} />

    <div className="sm:hidden flex flex-1 justify-end items-center">
      <button onClick={handleToggle}>{toggle ? <Close /> : <Menu />}</button>

      <ul className={`${toggle ? 'flex' : 'hidden'} absolute inset-0 flex flex-col top-20 z-10`}>
        {navLinks.map((item) => (
          <Link key={item.id} to={item.section} spy={true} smooth={true} duration={500} offset={-70}>
            <li className="bg-secondary bg-opacity-40 text-center border-b-2 border-opacity-60  text-secondary font-semibold py-4 border-b-lightBlue hover:bg-opacity-100 cursor-pointer text-lg">
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  </motion.nav>
);

export default ScrolledNavbar;
