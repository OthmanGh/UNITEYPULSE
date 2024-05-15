import { useState, useEffect } from 'react';
import { navLinks } from '../../../../constants';
import { Close, Menu } from '../../../../utils/icons';
import shortStyles from '../../../../components/index';
import LoginBtn from './components/LoginBtn';
import ScrolledNavbar from './components/ScrolledNavbar';
import companyLogo from '../../../../assets/logo_1.png';
import NavLinkItem from './components/NavLinkItem';
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigator = useNavigate();

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
        <img src={companyLogo} alt="company logo" className="w-[80px] h-[80px]" />
        <ul className={`hidden sm:flex gap-8 md:gap-12 text-sm sm:text-[14px] md:text-[16px] `}>
          {navLinks.map((nav) => (
            <NavLinkItem key={nav.id} id={nav.id} title={nav.title} />
          ))}
        </ul>

        <LoginBtn onClick={() => navigator('/auth')} />

        <div className="sm:hidden flex flex-1 justify-end items-center text-2xl">
          <button onClick={handleToggle} className="hover:text-primary transition-all duration-500 ">
            {toggle ? <Close /> : <Menu />}
          </button>

          <ul className={`${toggle ? 'flex' : 'hidden'} absolute inset-0 flex flex-col top-20 z-10  font-montserrat`}>
            {navLinks.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-center bg-extraDark p-4 cursor-pointer transition-all duration-500 text-primary text-opacity-60 hover:text-opacity-100 hover:scale-110 hover:border-none border-primary border-b-[1px] text-[1rem]"
              >
                <ScrollLink to={item.id} spy={true} smooth={true} duration={500}>
                  {item.title}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {isScrolled && <ScrolledNavbar handleToggle={handleToggle} toggle={toggle} />}
    </>
  );
};

export default Navbar;
