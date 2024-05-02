import { useState, useEffect } from 'react';
import { navLinks } from '../../../constants';
import { Close, Menu } from '../../../utils/icons';
import shortStyles from '../../../components/index';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const NavLinkItem = ({ id, title }) => (
    <Link to={id} spy={true} smooth={true} duration={500} offset={-70}>
      <li className={`${shortStyles.pointer} hover:text-primary transition-all duration-500`}>{title}</li>
    </Link>
  );

  return (
    <>
      <nav className={`w-full p-6 ${shortStyles.flexBetween} border-lightBlue text-white navbar z-40 bg-dark font-montserrat`}>
        <LogoTitle />

        <ul className={`hidden sm:flex gap-8 md:gap-12 text-sm sm:text-[14px] md:text-[16px] `}>
          {navLinks.map((nav) => (
            <NavLinkItem key={nav.id} {...nav} />
          ))}
        </ul>

        <LoginBtn handleToggle={handleToggle} />

        <div className="sm:hidden flex flex-1 justify-end items-center text-2xl">
          <button onClick={handleToggle} className="hover:text-primary transition-all duration-500 ">
            {toggle ? <Close /> : <Menu />}
          </button>

          <ul className={`${toggle ? 'flex' : 'hidden'} absolute inset-0 flex flex-col top-20 z-10  font-montserrat`}>
            {navLinks.map((item) => (
              <Link key={item.id} to={item.section} spy={true} smooth={true} duration={500} offset={-70}>
                <li className="flex items-center justify-center bg-half-transparent p-4 cursor-pointer transition-all duration-500 text-primary text-opacity-60 hover:text-opacity-100 hover:scale-110 hover:border-none border-primary border-b-[1px] text-[1rem]">
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </nav>

      {isScrolled && <ScrolledNavbar handleToggle={handleToggle} toggle={toggle} />}
    </>
  );
};

const ScrolledNavbar = ({ handleToggle, toggle }) => (
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

const LogoTitle = () => (
  <p className={` font-bold group hover:text-primary text-xl xs:text-xl sm:text-2xl md:text-3xl transition-all duration-700`}>
    Unity<span className={`text-primary group-hover:text-gray-300`}>Pulse</span>
  </p>
);

const NavLinkItem = ({ id, title }) => (
  <Link to={id} spy={true} smooth={true} duration={500} offset={-70}>
    <li className={`${shortStyles.pointer} hover:text-primary transition-all duration-500`}>{title}</li>
  </Link>
);

const LoginBtn = ({ handleToggle }) => (
  <button
    className={`hidden sm:flex border-[1px] border-transparent px-4 py-2 rounded-xl hover:text-primary hover:border-primary hover:scale-90 transition-all duration-500
  sm:text-xl md:text-2xl
  `}
    onClick={handleToggle}
  >
    Login
  </button>
);

export default Navbar;
