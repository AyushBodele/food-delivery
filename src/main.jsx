import React from 'react';
import ReactDOM from 'react-dom/client';
import { CartProvider } from './context/CartContext';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';

import App from './App';
import CategoryPage from './Menu/CategoryPage';
import RestaurantDetails from './Menu/MenuItems/RestaurantsDetails';
import RestaurantMenu from './Menu/MenuItems/RestaurantMenu.jsx';

const AppLayout = () => (
  <>
    <Outlet />
  </>
);

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: 'category/:type',
        element: <CategoryPage />
      },
      {
        path: 'category/:type/:slug',
        element: <RestaurantDetails />
      },
      {
        path: 'restaurant/:id/:slug',
        element: <RestaurantMenu />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={appRouter} />
    </CartProvider>
  </React.StrictMode>
);
