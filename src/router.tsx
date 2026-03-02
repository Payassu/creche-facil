import { createBrowserRouter } from 'react-router-dom';
import InstitutionSearch from '@/pages/institution/institution-search.tsx';
import InstitutionDetail from '@/pages/institution/institution-detail.tsx';
import Login from '@/pages/auth/login';
import Register from '@/pages/auth/register';
import InstitutionDashboard from '@/pages/institution/institution-dashboard.tsx';
import HomePage from "@/pages/shared/home-page.tsx";
import ParentDashboard from "@/pages/parent/parent-dashboard.tsx";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/search',
    element: <InstitutionSearch />,
    // loader
    // errorElement
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
