import {useRoutes} from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import MainLayout from "../layouts/MainLayout/index.jsx";
import StorePage from "../pages/StorePage.jsx";
import BasicTable from "../pages/UsersPage2.jsx";



export default function Router() {
  return useRoutes([
    
    {
      path: '/',
      element: <MainLayout/>,
      children: [
        { index: true, element: <HomePage/> }
        ,{ path: 'store', element: <StorePage />}
        ,{ path: 'users2', element: <BasicTable />}
      ],
    },
   
  ])
}
