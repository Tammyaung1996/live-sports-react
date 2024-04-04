import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/Home";
import TwoDPage from "../pages/TwoD";

import Login from "../pages/Login";
import ForgetPassword from "../pages/ForgetPassword";
import Register from "../pages/Register";

import TwoDChooseNumberPage from "../pages/TwoDChooseNumber";
import TwoDCheckoutPage from "../pages/TwoDCheckout";

import ThreeD from "../pages/3D/ThreeD";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        index: true,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "/2d",
        children: [
          // {
          //     path: '/',
          //     element: <HomePage />,
          //     index: true
          // },
          // {
          //     path: '/login',
          //     element: <Login />,
          // },
          // {
          //     path: '/register',
          //     element: <Register />,
          // },
          // {
          //     path: '/forget-password',
          //     element: <ForgetPassword />,
          // },
          {
            path: 'twoD',
            element: <TwoDPage />
          },
          {
            path: 'chooseNumber',
            element: <TwoDChooseNumberPage />
          },
          {
            path: 'checkout',
            element: <TwoDCheckoutPage />
          }

        ]
      },
      {
        path: "/3d",
        children: [
          {
            path: "threeD",
            element: <ThreeD />,
          },
          {
            path: "chooseNumber",
            element: <TwoDChooseNumberPage />,
          },
        ],
      },
    ],
  },
]);
export default router;
