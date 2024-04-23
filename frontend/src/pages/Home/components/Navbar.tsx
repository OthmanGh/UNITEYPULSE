import { useState } from 'react';
import styles from './Navbar.module.css';
import { navLinks } from '../../../constants';
import { Close, Menu } from '../../../constants/icons';
import shortStyles from '../../../components/index';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <motion.nav animate={{ border: 2 }} className={`w-full p-6 ${shortStyles.flexBetween}  border-lightBlue text-white  navbar h-20`}>
      <motion.p
        initial={{ fontSize: 40, x: -250 }}
        animate={{ fontSize: 50, x: 2 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className={`${styles.navbar} font-bold ${shortStyles.linksFonts} group ${shortStyles.transition} hover:text-primary`}
      >
        Unity<span className={`text-primary group-hover:text-white ${shortStyles.transition}`}>Pulse</span>
      </motion.p>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'spring', delay: 1 }}
        className={`hidden sm:flex sm:text-lg gap-6 md:gap-12 md:text-xl text-lightBlue font-semibold`}
      >
        {navLinks.map((nav) => (
          <motion.li
            key={nav.id}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className={`${shortStyles.pointer} hover:text-primary ${shortStyles.transition} ${shortStyles.hoverScale}`}
          >
            {nav.title}
          </motion.li>
        ))}
      </motion.ul>

      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className={`hidden ${shortStyles.linksFonts} sm:flex border-2 border-transparent px-4 py-2 rounded-xl ${shortStyles.transition} hover:text-primary hover:border-primary hover:scale-95`}
      >
        Signup/Login
      </motion.button>

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

        <motion.ul
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${toggle ? 'flex' : 'hidden'} absolute top-[82px] w-full left-[0%] ${shortStyles.flexCenter} flex-col list-none`}
        >
          {navLinks.map((item) => (
            <motion.li
              key={item.id}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={` bg-secondary ${shortStyles.transition} bg-opacity-40 text-center border-b-2 border-opacity-60 w-full py-4 border-b-lightBlue text-blue-100 hover:bg-opacity-100 ${shortStyles.pointer} ${shortStyles.hoverScale} font-semibold text-lg`}
            >
              {item.title}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
