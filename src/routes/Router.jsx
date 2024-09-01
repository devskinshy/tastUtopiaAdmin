import {useRoutes} from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import UserPage from "../pages/UserPage.jsx";
import MainLayout from "../layouts/MainLayout/index.jsx";

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout/>,
      children: [
        { index: true, element: <HomePage/> }
      ],
    },
    {
      path: '/user',
      element: <MainLayout/>,
      children: [
        { index: true, element: <UserPage/> }
      ],
    },
  ])
}
