import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";

const route = createBrowserRouter([
     {
          path: '/',
          element: <Main></Main>,
          errorElement:<ErrorPage></ErrorPage>,
          children:[
               {
               path:'/',
               element:<Home></Home>
               }
          ]
     }
])
export default route;