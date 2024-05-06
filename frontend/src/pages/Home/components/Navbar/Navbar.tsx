import { useState, useEffect } from 'react';
import { navLinks } from '../../../../constants';
import { Close, Menu } from '../../../../utils/icons';
import shortStyles from '../../../../components/index';
import { Link } from 'react-scroll';
import LoginBtn from './components/LoginBtn';
import NavLinkItem from './components/NavLinkItem';
import ScrolledNavbar from './components/ScrolledNavbar';
import companyLogo from '../../../../assets/logo_1.png';

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

  return (
    <>
      <nav className={`w-full p-6 ${shortStyles.flexBetween} border-lightBlue text-white navbar z-40 h-[13vh] backdrop-blur-sm font-montserrat absolute`}>
        <img src={companyLogo} alt="company logo" className="w-[100px] h-[100px]" />
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
                <li className="flex items-center justify-center bg-gray-900 p-4 cursor-pointer transition-all duration-500 text-primary text-opacity-60 hover:text-opacity-100 hover:scale-110 hover:border-none border-primary border-b-[1px] text-[1rem]">
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

export default Navbar;
