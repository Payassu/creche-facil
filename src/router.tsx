import { createBrowserRouter } from 'react-router-dom';
import InstitutionSearch from '@/pages/institution/institution-search.tsx';
import InstitutionDetail from '@/pages/institution/institution-detail.tsx';
import Login from '@/pages/auth/login';
import Register from '@/pages/auth/register';
import InstitutionDashboard from '@/pages/institution/institution-dashboard.tsx';
import HomePage from '@/pages/shared/home-page.tsx';
import ParentDashboard from '@/pages/parent/parent-dashboard.tsx';
import RootLayout from '@/layout.tsx';
import ParentChat from '@/pages/parent/parent-chat.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        path: 'search',
        element: <InstitutionSearch />,
        // loader
        // errorElement
      },
      {
        path: 'parent',
        children: [
          {
            path: 'applications',
            // element: <ParentChat />,
          },
          {
            path: 'dashboard',
            element: <ParentDashboard />,
          },
          {
            path: 'chat',
            element: <ParentChat />,
          },
          {
            path: 'profile',
            // element: <ParentChat />,
          },
        ],
        // applications
        // messages
        // profile
      },
      {
        path: 'institution',
        children: [
          {
            path: 'dashboard',
            element: <InstitutionDashboard />,
          },
          {
            path: ':id',
            element: <InstitutionDetail />,
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);
