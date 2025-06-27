import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';

import App from './App';
import CategoryPage from './Menu/CategoryPage';

// Common layout with Nav on all pages
const AppLayout = () => (
  <>
    <Outlet />
  </>
);

// Routing config
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true, // equivalent to path: ''
        element: <App />
      },
      {
        path: 'category/:type',
        element: <CategoryPage />
      }
    ]
  }
]);

// Render the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
