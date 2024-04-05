import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/Home";
import TwoDPage from "../pages/TwoD";

import Login from "../pages/Login";
import ForgetPassword from "../pages/ForgetPassword";
import Register from "../pages/Register";

import TwoDChooseNumberPage from "../pages/TwoDChooseNumber";
import ThreeD from "../pages/3D/ThreeD";
import Holiday from "../pages/Holiday";
import History from "../pages/History";
import LeaderBoard from "../pages/LeaderBoard";

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
          {
            path: "twoD",
            element: <TwoDPage />,
          },
          {
            path: "chooseNumber",
            element: <TwoDChooseNumberPage />,
          },
          {
            path: "leader-board",
            element: <LeaderBoard />,
          },
          {
            path: "history",
            element: <History />,
          },
          {
            path: "holiday",
            element: <Holiday />,
          },
        ],
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
