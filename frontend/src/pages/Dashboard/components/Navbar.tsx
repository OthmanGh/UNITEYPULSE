/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Component, ReactNode, useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { Tooltip } from '@mui/material';
import avatar from './../../../assets/avatar.png';

import Chat from './Chat';
import UserProfile from './UserProfile';
import Notifications from './Notifications';
import Cart from './Cart';

import { useStateContext } from '../../../contexts/ContextProvider';

type NavButtonProps = {
  title: string;
  customFunc: () => void;
  icon: ReactNode;
  color: string;
  dotColor: string;
};

const NavButton = ({ title, customFunc, icon, color, dotColor }: NavButtonProps) => (
  <Tooltip title={title} placement="bottom">
    <button type="button" onClick={() => customFunc()} style={{ color }} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
      <span style={{ background: dotColor }} className="absolute inlnie-flex rounded-full h-2 w-2 right-2 top-2"></span>
      {icon}
    </button>
  </Tooltip>
);
const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, screenSize, setScreenSize, handleClick } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton title="Menu" customFunc={() => setActiveMenu((prev) => !prev)} color="blue" dotColor="" icon={<AiOutlineMenu />} />

      <div className="flex">
        <NavButton title="Cart" customFunc={() => handleClick('cart')} color="blue" dotColor="" icon={<FiShoppingCart />} />

        <NavButton title="Chat" customFunc={() => handleClick('chat')} color="blue" dotColor="#03c9b7" icon={<BsChatLeft />} />

        <NavButton title="Notifications" customFunc={() => handleClick('notification')} color="blue" dotColor="#03c9b7" icon={<RiNotification3Line />} />

        <Tooltip title="Profile" placement="bottom">
          <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg" onClick={() => handleClick('userProfile')}>
            <img src={avatar} className="rounded-full w-8 h-8" alt="avatar" />

            <p>
              <span className="text-gray-400 text-14">Hi,</span> {''}
              <span className="text-gray-400 font-bold ml-1 text-14">Othman</span>
            </p>

            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </Tooltip>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notifications />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
