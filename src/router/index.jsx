import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/Home";
import TwoDPage from "../pages/TwoD";
import TwoDChooseNumberPage from "../pages/TwoDChooseNumber";

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
                path: '/2d',
                children: [
                    {
                        path: 'twoD',
                        element: <TwoDPage />
                    },
                    {
                        path: 'chooseNumber',
                        element: <TwoDChooseNumberPage />
                    }
                ]
            }
        ]
    }
]);
export default router;