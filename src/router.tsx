import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/shared/home_page';
import InstitutionSearch from './pages/shared/institution_search';
import InstitutionDetail from './pages/shared/institution_detail';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import ParentDashboard from './pages/parent/parent_dashboard';
import InstitutionDashboard from './pages/institution/institution_dashboard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/search',
    element: <InstitutionSearch />,
  },
  {
    path: '/institution/:id',
    element: <InstitutionDetail />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/parent/dashboard',
    element: <ParentDashboard />,
  },
  {
    path: '/institution/dashboard',
    element: <InstitutionDashboard />,
  },
]);
