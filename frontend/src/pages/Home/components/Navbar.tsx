import { useState } from 'react';
import styles from './Navbar.module.css';
import { navLinks } from '../../../constants';
import { Close, Menu } from '../../../constants/icons';
import shortStyles from '../../../components/index';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <motion.nav animate={{ border: 2 }} className={` w-full p-6 ${shortStyles.flexBetween}  border-lightBlue text-white  navbar h-20`}>
      <motion.p
        initial={{ x: -250 }}
        animate={{ x: 2 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className={`${styles.navbar} font-bold ${shortStyles.linksFonts} group ${shortStyles.transition} hover:text-primary text-lg xs:text-xl ss:text-2xl  sm:text-3xl md:text-4xl`}
      >
        Unity<span className={`text-primary group-hover:text-white ${shortStyles.transition}`}>Pulse</span>
      </motion.p>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'spring', delay: 1 }}
        className={`hidden sm:flex gap-8 md:gap-12 text-sm  ss:text-md  sm:text-lg md:text-xl text-lightBlue font-semibold`}
      >
        {navLinks.map((nav) => (
          <Link
            key={nav.id}
            to={nav.id}
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className={`${shortStyles.pointer} hover:text-primary ${shortStyles.transition} ${shortStyles.hoverScale}`}
          >
            <motion.li>{nav.title}</motion.li>
          </Link>
        ))}
      </motion.ul>

      <motion.button
        initial={{ x: 250 }}
        animate={{ x: 2 }}
        whileHover={{ scale: 0.9, transition: { duration: 0 } }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className={`hidden ${shortStyles.linksFonts} sm:flex border-2 border-transparent px-4 py-2 rounded-xl ${shortStyles.transition} hover:text-primary hover:border-primary hover:scale-90`}
      >
        Signup/Login
      </motion.button>

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        transition={{ delay: 0.7 }}
        animate={{ x: 0, opacity: 1 }}
        className="sm:hidden flex flex-1 justify-end items-center"
      >
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
          className={`${toggle ? 'flex' : 'hidden'}  absolute inset-0 flex flex-col top-20 z-10`}
        >
          {navLinks.map((item) => (
            <Link key={item.id} to={item.section} spy={true} smooth={true} duration={500} offset={-70}>
              <li
                className={` bg-secondary ${shortStyles.transition} bg-opacity-40 text-center border-b-2 border-opacity-60 bg-blue-300 text-secondary font-semibold py-4 border-b-lightBlue  hover:bg-opacity-100 ${shortStyles.pointer} ${shortStyles.hoverScale} font-semibold text-lg z-40`}
              >
                {item.title}
              </li>
            </Link>
          ))}
        </motion.ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
