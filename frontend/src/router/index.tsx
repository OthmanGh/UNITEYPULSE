import { createBrowserRouter } from 'react-router-dom';
import { Auth, Home, Dashboard, General, Employees, Customers, Kanban, Editor, Calendar, ExpenseTracker, Informations, Manage, Chat, Greet } from '../utils';
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
      { path: 'chat', element: <Chat /> },
    ],
  },
]);

export default router;
