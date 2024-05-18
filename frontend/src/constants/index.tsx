import { AiOutlineCalendar } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiBarChart } from 'react-icons/fi';
import { BsKanban, BsBoxSeam } from 'react-icons/bs';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine } from 'react-icons/ri';
import { Currency, MonthIcon, TodayIcon, WeekIcon } from '../utils/icons';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
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

export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: '39,354',
    percentage: '-4%',
    title: 'Customers',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: false,
  },
  {
    icon: <BsBoxSeam />,
    amount: '4,396',
    percentage: '+23%',
    title: 'Products',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: true,
  },
  {
    icon: <FiBarChart />,
    amount: '423,39',
    percentage: '+38%',
    title: 'Sales',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',

    pcColor: true,
  },
  {
    icon: <HiOutlineRefresh />,
    amount: '39,354',
    percentage: '-12%',
    title: 'Refunds',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: false,
  },
];

export const SparklineAreaData = {
  labels: Array.from({ length: 5 }, () => '1'),
  datasets: [
    {
      label: 'expenses',
      data: [3000, 5000, 1000, 7000, 9000],
      borderColor: '#40F8FF',
      backgroundColor: '#40F8FF',
    },
    {
      label: 'revenue',
      data: [6000, 9000, 6000, 2000, 4000],
      borderColor: '#0C356A',
      backgroundColor: '#0C356A',
    },
  ],
};

export const stackedChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'],
  datasets: [
    {
      label: 'revenue',
      data: [111.1, 127.3, 143.4, 159.9, 159.9, 159.9, 159.9],
      backgroundColor: '#40F8FF',
    },
    {
      label: 'expenses',
      data: [111.1, 127.3, 143.4, 159.9, 159.9, 159.9, 159.9],
      backgroundColor: '#0C356A',
    },
  ],
};

export const ecomPieChartData = [
  { x: '2018', y: 18, text: '35%' },
  { x: '2019', y: 18, text: '15%' },
  { x: '2020', y: 18, text: '25%' },
  { x: '2021', y: 18, text: '25%' },
];

export const expenseHistory = [
  {
    time: 'Today',
    Icon: <TodayIcon />,
  },

  {
    time: 'Week',
    Icon: <WeekIcon />,
  },

  {
    time: 'Month',
    Icon: <MonthIcon />,
  },
];

export const tableExpenseData = [
  {
    date: '2024-05-01',
    description: 'Shopping',
    category: 'Expenses',
    amount: '$50.00',
  },
  {
    date: '2024-05-02',
    description: 'Gasoline',
    category: 'Expenses',
    amount: '$40.00',
  },
  {
    date: '2024-05-03',
    description: 'Salary',
    category: 'Earnings',
    amount: '$1000.00',
  },
  {
    date: '2024-05-04',
    description: 'Restaurant',
    category: 'Expenses',
    amount: '$70.00',
  },
  {
    date: '2024-05-05',
    description: 'Utilities',
    category: 'Expenses',
    amount: '$120.00',
  },

  {
    date: '2024-05-01',
    description: 'Shopping',
    category: 'Expenses',
    amount: '$50.00',
  },
  {
    date: '2024-05-02',
    description: 'Gasoline',
    category: 'Expenses',
    amount: '$40.00',
  },
  {
    date: '2024-05-03',
    description: 'Salary',
    category: 'Earnings',
    amount: '$1000.00',
  },
  {
    date: '2024-05-04',
    description: 'Restaurant',
    category: 'Expenses',
    amount: '$70.00',
  },
  {
    date: '2024-05-05',
    description: 'Utilities',
    category: 'Expenses',
    amount: '$120.00',
  },

  {
    date: '2024-05-01',
    description: 'Shopping',
    category: 'Expenses',
    amount: '$50.00',
  },
  {
    date: '2024-05-02',
    description: 'Gasoline',
    category: 'Expenses',
    amount: '$40.00',
  },
  {
    date: '2024-05-03',
    description: 'Salary',
    category: 'Earnings',
    amount: '$1000.00',
  },
  {
    date: '2024-05-04',
    description: 'Restaurant',
    category: 'Expenses',
    amount: '$70.00',
  },
  {
    date: '2024-05-05',
    description: 'Utilities',
    category: 'Expenses',
    amount: '$120.00',
  },

  {
    date: '2024-05-03',
    description: 'Salary',
    category: 'Earnings',
    amount: '$1000.00',
  },
  {
    date: '2024-05-04',
    description: 'Restaurant',
    category: 'Expenses',
    amount: '$70.00',
  },
  {
    date: '2024-05-05',
    description: 'Utilities',
    category: 'Expenses',
    amount: '$120.00',
  },

  {
    date: '2024-05-01',
    description: 'Shopping',
    category: 'Expenses',
    amount: '$50.00',
  },
  {
    date: '2024-05-02',
    description: 'Gasoline',
    category: 'Expenses',
    amount: '$40.00',
  },
  {
    date: '2024-05-03',
    description: 'Salary',
    category: 'Earnings',
    amount: '$1000.00',
  },
  {
    date: '2024-05-04',
    description: 'Restaurant',
    category: 'Expenses',
    amount: '$70.00',
  },
  {
    date: '2024-05-05',
    description: 'Utilities',
    category: 'Expenses',
    amount: '$120.00',
  },
];
