import Home from '../pages/Home';
import Auth from '../pages/Authentication/Auth';
import Input from '../components/Input';
import Dashboard from '../pages/Dashboard';
import Chat from '../pages/Dashboard/pages/Chat/Chat';
import Greet from '../pages/Dashboard/components/Greet';

import Calendar from '../pages/Dashboard/pages/Calendar';
import Customers from '../pages/Dashboard/pages/Customers';
import Editor from '../pages/Dashboard/pages/Editor';
import Employees from '../pages/Dashboard/pages/Employees';
import General from '../pages/Dashboard/pages/General';
import Kanban from '../pages/Dashboard/pages/Kanban/Kanban';
import Orders from '../pages/Dashboard/pages/Orders';
import ExpenseTracker from '../pages/Dashboard/pages/ExpenseTracker/ExpenseTracker';
import Navbar from '../pages/Dashboard/components/Navbar';
import Manage from '../pages/Dashboard/pages/Manage';

import Sidebar from '../pages/Dashboard/components/Sidebar';
import Informations from '../pages/Infos/Informations';

export {
  Auth,
  Home,
  Input,
  Dashboard,
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
  Manage,
  Sidebar,
  Chat,
};

export const API_BASE_URI = 'http://192.168.0.103:8000/api';
