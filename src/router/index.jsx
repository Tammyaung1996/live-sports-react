import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/Home";
import TwoDPage from "../pages/TwoD";
import Login from '../pages/Login';
import ForgetPassword from "../pages/ForgetPassword";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
                index: true
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
                path: '/forget-password',
                element: <ForgetPassword />,
            },
            {
                path: '/2d',
                children: [
                    {
                        path: 'twoD',
                        element: <TwoDPage />
                    }
                ]
            }
        ]
    }
]);
export default router;