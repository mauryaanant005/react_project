import React from 'react';
import ReactDOM from 'react-dom/client';
import Furniture from './Furniture.jsx';
import Fashion from './Fashion.jsx';
import Wearables from './Wearables.jsx';
import Smartdevice from './Smartdevice.jsx';
import TvandAppliance from 'H:/React Project/Project/vite-project/src/Tv&Appliance.jsx';  
import Home from './components/Home.jsx';
import Contacts from './components/Contacts.jsx';
import LoginForm from './components/Login.jsx';
import SignupForm from './components/Signup.jsx';
import About from './components/About.jsx';
import Fresh from './Fresh.jsx';
import { CartProvider } from './CartContext';
import Cart from './Cart.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/Furniture',
    element: <Furniture />,
  },
  {
    path: '/Fashion',
    element: <Fashion />,
  },
  {
    path: '/Wearables',
    element: <Wearables />,
  },
  {
    path: '/Smartdevice',
    element: <Smartdevice />,
  },
  {
    path: '/Tv&Appliance',
    element: <TvandAppliance />,
  },
  {
    path: '/Fresh',
    element: <Fresh />,
  },
  {
    path: '/Home',
    element: <Home />,
  },
  {
    path: '/',
    element: <LoginForm />,
  },
  {
    path: '/signup',
    element: <SignupForm />,
  },
  {
    path: '/Contacts',
    element: <Contacts />,
  },
  {
    path: '/About',
    element: <About />,
  },
  {
    path: '/cart',
    element: <Cart />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
