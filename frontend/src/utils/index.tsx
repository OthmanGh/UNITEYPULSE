import Home from '../pages/Home';
import Auth from '../pages/Authentication/Auth';
import Input from '../components/Input';
import Dashboard from '../pages/Dashboard';
import Chat from '../pages/Dashboard/pages/Chat/Chat';
import Greet from '../pages/Dashboard/components/Greet';

import Area from '../pages/Dashboard/pages/Charts/Area';
import Bar from '../pages/Dashboard/pages/Charts/Bar';
import ColorMapping from '../pages/Dashboard/pages/Charts/ColorMapping';

import Financial from '../pages/Dashboard/pages/Charts/Financial';

import Line from '../pages/Dashboard/pages/Charts/Line';
import Pie from '../pages/Dashboard/pages/Charts/Pie';
import Pyramid from '../pages/Dashboard/pages/Charts/Pyramid';
import Stacked from '../pages/Dashboard/pages/Charts/Stacked';
import Calendar from '../pages/Dashboard/pages/Calendar';
import Customers from '../pages/Dashboard/pages/Customers';
import Editor from '../pages/Dashboard/pages/Editor';
import Employees from '../pages/Dashboard/pages/Employees';
import General from '../pages/Dashboard/pages/General';
import Kanban from '../pages/Dashboard/pages/Kanban/Kanban';
import Orders from '../pages/Dashboard/pages/Orders';
import ExpenseTracker from '../pages/Dashboard/pages/ExpenseTracker/ExpenseTracker';
import Navbar from '../pages/Dashboard/components/Navbar';
import Footer from '../pages/Dashboard/components/Footer';
import Manage from '../pages/Dashboard/pages/Manage';

import Theme from '../pages/Dashboard/components/Theme';
import Infos from '../pages/Infos/Informations';
import Sidebar from '../pages/Dashboard/components/Sidebar';
import Informations from '../pages/Infos/Informations';

export {
  Auth,
  Home,
  Input,
  Dashboard,
  Area,
  Bar,
  ColorMapping,
  Financial,
  Line,
  Pie,
  Pyramid,
  Stacked,
  Calendar,
  ExpenseTracker,
  Customers,
  Editor,
  Employees,
  General,
  Kanban,
  Orders,
  Informations,
  Greet,
  Navbar,
  Footer,
  Manage,
  Sidebar,
  Theme,
  Chat,
};

export const AUTH_API_BASE_URL = 'http://192.168.2.213:8000/api/auth';
export const API_BASE_URL = 'http://192.168.2.213:8000';
