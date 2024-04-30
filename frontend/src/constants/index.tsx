import { ReactElement } from 'react';
import { AiOutlineShoppingCart, AiOutlineCalendar, AiOutlineStock, AiOutlineAreaChart, AiOutlineBarChart } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { BiColorFill } from 'react-icons/bi';
import { GiLouvrePyramid } from 'react-icons/gi';
import { Currency } from './icons';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import { GrLocation } from 'react-icons/gr';

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
    id: 'howItWorks',
    title: 'How it Works',
  },

  {
    id: 'aboutus',
    title: 'AboutUs',
  },

  {
    id: 'pricing',
    title: 'Pricing',
  },

  {
    id: 'getintouch',
    title: 'getInTouch',
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
  text: "Welcome to UNITEY PULSE, your trusted partner in company management solutions. We're committed to revolutionizing the way businesses operate by providing a comprehensive platform that empowers organizations to streamline their operations and enhance efficiency. Our mission is to simplify business management processes and empower organizations to achieve their full potential, guided by our core values of innovation, integrity, and customer success, which drive everything we do.",
  title: 'About us',
};

export const getInTouch = {
  title: 'Get in Touch',
  textQ: "Can't find the information you're looking for?",
  textT: 'Fill out the form below, and one of our team members will get back to you as soon as possible.',
};

type NavLink = {
  name: string;
  icon: ReactElement;
};

type LinkGroup = {
  title: string;
  links: NavLink[];
};

export const links: LinkGroup[] = [
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
        name: 'orders',
        icon: <AiOutlineShoppingCart />,
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
        name: 'color-picker',
        icon: <BiColorFill />,
      },
    ],
  },
  {
    title: 'Charts',
    links: [
      {
        name: 'line',
        icon: <AiOutlineStock />,
      },
      {
        name: 'area',
        icon: <AiOutlineAreaChart />,
      },

      {
        name: 'bar',
        icon: <AiOutlineBarChart />,
      },
      {
        name: 'pie',
        icon: <FiPieChart />,
      },
      {
        name: 'financial',
        icon: <RiStockLine />,
      },
      {
        name: 'color-mapping',
        icon: <BsBarChart />,
      },
      {
        name: 'pyramid',
        icon: <GiLouvrePyramid />,
      },
      {
        name: 'stacked',
        icon: <AiOutlineBarChart />,
      },
    ],
  },
];

export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: '39,354',
    percentage: '-4%',
    title: 'Customers',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {
    icon: <BsBoxSeam />,
    amount: '4,396',
    percentage: '+23%',
    title: 'Products',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'green-600',
  },
  {
    icon: <FiBarChart />,
    amount: '423,39',
    percentage: '+38%',
    title: 'Sales',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',

    pcColor: 'green-600',
  },
  {
    icon: <HiOutlineRefresh />,
    amount: '39,354',
    percentage: '-12%',
    title: 'Refunds',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
];

export const SparklineAreaData = [
  { x: 1, yval: 2 },
  { x: 2, yval: 6 },
  { x: 3, yval: 8 },
  { x: 4, yval: 5 },
  { x: 5, yval: 10 },
];

export const ecomPieChartData = [
  { x: '2018', y: 18, text: '35%' },
  { x: '2019', y: 18, text: '15%' },
  { x: '2020', y: 18, text: '25%' },
  { x: '2021', y: 18, text: '25%' },
];
