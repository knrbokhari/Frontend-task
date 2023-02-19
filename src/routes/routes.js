import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import ContuctUs from "../page/ContuctUs";
import Home from "../page/Home";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
            path: "/contact",
            element: <ContuctUs/>,
          }
      ],
    },
  ]);
  
  export default routes;