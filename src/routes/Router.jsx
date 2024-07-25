import {useRoutes} from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import MainLayout from "../layouts/MainLayout/index.jsx";
import KTablePage from "../pages/KTablePage.tsx";

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
      path: '/kdk',
      element: <MainLayout/>,
      children: [
        { index: true, element: <KTablePage/> }
      ],
    },
  ])
}
