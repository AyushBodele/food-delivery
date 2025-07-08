import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import CategoryLayout from '../layouts/CategoryLayout';
import HomePage from '../pages/HomePage';
import CategoryPage from '../pages/CategoryPage';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ]
  },
  {
    path: '/category/:type',
    element: <CategoryLayout />,
    children: [
      {
        index: true,
        element: <CategoryPage />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;