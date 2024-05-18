import { AiOutlineCalendar } from 'react-icons/ai';
import { FiShoppingBag, FiEdit } from 'react-icons/fi';
import { BsKanban } from 'react-icons/bs';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine } from 'react-icons/ri';
import { Currency } from '../utils/icons';

import { SiExpensify } from 'react-icons/si';
import { PiWechatLogoFill } from 'react-icons/pi';
import { SiGoogletagmanager } from 'react-icons/si';

export const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },

  {
    id: 'features',
    title: 'Features',
  },

  {
    id: 'aboutus',
    title: 'AboutUs',
  },

  {
    id: 'getintouch',
    title: 'GetInTouch',
  },
];

export const Logo = {
  src: './../assets/logo.png',
  alt: 'Unity Pulse Logo',
};

export const features = {
  paragraph:
    'Welcome to UNITEY PULSE, your comprehensive company management platform. Simplify your operations, boost productivity, and streamline collaboration across all departments with our intuitive solution',

  title: 'Elevate Your Business with Advanced Features',
};

type FeatureCard = {
  Icon: React.ElementType;
  title: string;
  text: string;
  buttonText: string;
};

export const featuresCard: FeatureCard[] = [
  {
    Icon: Currency,
    title: 'Employee Management',
    text: 'Streamline employee management processes with user roles and permissions, employee profiles, attendance tracking, leave management, and performance evaluation',
    buttonText: 'Get Started',
  },

  {
    Icon: Currency,
    title: 'Employee Management',
    text: 'Streamline employee management processes with user roles and permissions, employee profiles, attendance tracking, leave management, and performance evaluation',
    buttonText: 'Get Started',
  },

  {
    Icon: Currency,
    title: 'Employee Management',
    text: 'Streamline employee management processes with user roles and permissions, employee profiles, attendance tracking, leave management, and performance evaluation',
    buttonText: 'Get Started',
  },

  {
    Icon: Currency,
    title: 'Employee Management',
    text: 'Streamline employee management processes with user roles and permissions, employee profiles, attendance tracking, leave management, and performance evaluation',
    buttonText: 'Get Started',
  },

  {
    Icon: Currency,
    title: 'Employee Management',
    text: 'Streamline employee management processes with user roles and permissions, employee profiles, attendance tracking, leave management, and performance evaluation',
    buttonText: 'Get Started',
  },

  {
    Icon: Currency,
    title: 'Employee Management',
    text: 'Streamline employee management processes with user roles and permissions, employee profiles, attendance tracking, leave management, and performance evaluation',
    buttonText: 'Get Started',
  },
];

export const aboutusText = {
  text: "Welcome to UNITEY PULSE, your trusted partner in company management solutions. We're dedicated to revolutionizing business operations with our comprehensive platform. Our mission is to simplify management processes, empowering organizations to reach their full potential with innovation, integrity, and customer success at our core.",
  title: 'About us',
};

export const getInTouch = {
  title: 'Get in Touch',
  textQ: "Can't find the information you're looking for?",
  textT: 'Fill out the form below, and one of our team members will get back to you as soon as possible.',
};

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'General',
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'manage',
        icon: <SiGoogletagmanager />,
      },
      {
        name: 'employees',
        icon: <IoMdContacts />,
      },
      {
        name: 'customers',
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: 'Apps',
    links: [
      {
        name: 'calendar',
        icon: <AiOutlineCalendar />,
      },
      {
        name: 'kanban',
        icon: <BsKanban />,
      },
      {
        name: 'editor',
        icon: <FiEdit />,
      },
      {
        name: 'tracker',
        icon: <SiExpensify />,
      },

      {
        name: 'Chat',
        icon: <PiWechatLogoFill className="text-xl" />,
      },
    ],
  },
  // {
  //   title: 'Charts',
  //   links: [
  //     {
  //       name: 'line',
  //       icon: <AiOutlineStock />,
  //     },

  //     {
  //       name: 'pie',
  //       icon: <FiPieChart />,
  //     },

  //     {
  //       name: 'pyramid',
  //       icon: <GiLouvrePyramid />,
  //     },
  //   ],
  // },
];
