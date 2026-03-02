import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/shared/home-page.tsx';
import InstitutionSearch from './pages/shared/institution-search.tsx';
import InstitutionDetail from './pages/shared/institution-detail.tsx';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import ParentDashboard from './pages/parent/parent_dashboard';
import InstitutionDashboard from './pages/institution/institution-dashboard.tsx';

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
