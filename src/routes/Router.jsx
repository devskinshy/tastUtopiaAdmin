import {useRoutes} from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import TestTablePage from "../pages/TestTablePage.jsx";
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
      path: '/TestTablePage',
      element: <MainLayout/>,
      children: [
        { index: true, element: <TestTablePage/> }
      ],
    },
  ])
}
