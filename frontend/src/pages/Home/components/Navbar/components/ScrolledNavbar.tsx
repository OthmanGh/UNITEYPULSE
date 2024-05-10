import NavLinkItem from './NavLinkItem';
import shortStyles from '../../../../../components/index';
import { navLinks } from '../../../../../constants';
import LoginBtn from './LoginBtn';
import { Close, Menu } from '../../../../../utils/icons';
import { motion } from 'framer-motion';
import companyLogo from '../../../../../assets/logo_1.png';
import { Link as ScrollLink } from 'react-scroll';

const ScrolledNavbar = ({ handleToggle, toggle }: { toggle: boolean; handleToggle: () => void }) => (
  <motion.nav
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    className={`w-full px-6 ${shortStyles.flexBetween} bg-extraDark fixed top-0 left-0 right-0  text-white z-30 gap-8 md:gap-12 h-[70px] border-b-primary border-b-[2px]`}
  >
    <img src={companyLogo} className="w-[80px] h-[80px]" alt="company Logo" />

    <ul className="hidden sm:flex gap-8 md:gap-12 text-sm sm:text-[14px] md:text-[16px] ">
      {navLinks.map((nav) => (
        <NavLinkItem key={nav.id} {...nav} />
      ))}
    </ul>

    <LoginBtn handleToggle={handleToggle} />

    <div className="sm:hidden flex flex-1 justify-end items-center ">
      <button className="hover:text-primary text-xl transition-all duration-400" onClick={handleToggle}>
        {toggle ? <Close /> : <Menu />}
      </button>

      <ul className={`${toggle ? 'flex' : 'hidden'} absolute inset-0 flex flex-col top-[70px] z-10`}>
        {navLinks.map((item) => (
          <ScrollLink key={item.id} to={item.section} spy={true} smooth={true} duration={500} offset={-70} activeClass="active">
            <li className="bg-extraDark bg-opacity-95 text-center border-b-2 p-4 text-primary border-b-primary hover:scale-110 transition-all duration-500 text-md font-montserrat cursor-pointer">
              {item.title}
            </li>
          </ScrollLink>
        ))}
      </ul>
    </div>
  </motion.nav>
);

export default ScrolledNavbar;
