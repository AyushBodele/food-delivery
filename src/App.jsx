import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import CategoryLayout from './layouts/CategoryLayout';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import './index.css';

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
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;