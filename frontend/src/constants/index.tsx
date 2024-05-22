import { AiOutlineCalendar } from 'react-icons/ai';
import { FiShoppingBag, FiEdit } from 'react-icons/fi';
import { BsKanban } from 'react-icons/bs';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine } from 'react-icons/ri';
import { Currency } from '../utils/icons';

import { SiExpensify } from 'react-icons/si';
import { PiWechatLogoFill } from 'react-icons/pi';
import { SiGoogletagmanager } from 'react-icons/si';
import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { SiGooglemessages } from 'react-icons/si';
import { IoDocument } from 'react-icons/io5';
import { IoAnalyticsSharp } from 'react-icons/io5';
import { FaTasks } from 'react-icons/fa';

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
    text: 'Streamline employee management processes with user roles and permissions, employee profiles, attendance tracking, leave management.',
    buttonText: 'Get Started',
  },

  {
    Icon: FaMoneyBillTransfer,
    title: 'Finance Tracking',
    text: 'Keep your finances in check with expense tracking, budget management, invoicing, and seamless integration with accounting software.',
    buttonText: 'Get Started',
  },

  {
    Icon: FaTasks,
    title: 'Task Manager',
    text: 'Create, assign, and track tasks efficiently using our intuitive task management tools. Set deadlines, prioritize tasks, and collaborate with team members effortlessly.',
    buttonText: 'Get Started',
  },

  {
    Icon: SiGooglemessages,
    title: 'Communication Tools',
    text: 'Foster effective communication and collaboration with internal messaging systems, announcement boards, and integration with video conferencing tools.',
    buttonText: 'Get Started',
  },

  {
    Icon: IoDocument,
    title: 'Document Management',
    text: 'Centralize your document repository, manage permissions, and ensure version control for easy access and collaboration on documents.',
    buttonText: 'Get Started',
  },

  {
    Icon: IoAnalyticsSharp,
    title: 'Analytics and Insights',
    text: "Gain valuable insights into your company's performance with customizable dashboards, reports, and predictive analytics for informed decision-making.",
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
