import {useRoutes} from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import UserPage from "../pages/UserPage.jsx";
import StorePage from "../pages/StorePage.jsx";
import ReviewPage from "../pages/ReviewPage.jsx";
import MainLayout from "../components/layouts/MainLayout/index.jsx";

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout/>,
      children: [
        { index: true, element: <HomePage/> },
        { path: 'user', element: <UserPage />},
        { path: 'store', element: <StorePage />},
        { path: 'review', element: <ReviewPage />}
      ],
    },
  ])
}
