import { createBrowserRouter } from 'react-router-dom';
import {
  Auth,
  Home,
  Dashboard,
  General,
  Employees,
  Customers,
  Kanban,
  Editor,
  Calendar,
  ExpenseTracker,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorMapping,
  Informations,
  Manage,
  Pyramid,
  Stacked,
  Chat,
  Infos,
  Greet,
} from '../utils';
import ProtectedRoute from '../components/ProtectedRoute';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/auth', element: <Auth /> },

  {
    path: '/infos',
    element: <Informations />,
  },

  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <Dashboard />,
      </ProtectedRoute>
    ),
    children: [
      { path: '', element: <Greet /> },
      { path: 'general', element: <General /> },
      { path: 'manage', element: <Manage /> },
      { path: 'employees', element: <Employees /> },
      { path: 'customers', element: <Customers /> },
      { path: 'kanban', element: <Kanban /> },
      { path: 'editor', element: <Editor /> },
      { path: 'calendar', element: <Calendar /> },
      { path: 'tracker', element: <ExpenseTracker /> },
      { path: 'line', element: <Line /> },
      { path: 'area', element: <Area /> },
      { path: 'bar', element: <Bar /> },
      { path: 'pie', element: <Pie /> },
      { path: 'financial', element: <Financial /> },
      { path: 'color-mapping', element: <ColorMapping /> },
      { path: 'pyramid', element: <Pyramid /> },
      { path: 'stacked', element: <Stacked /> },
      { path: 'chat', element: <Chat /> },
    ],
  },
]);

export default router;
