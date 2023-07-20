import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navber/Navber";

const Main = () => {
     return (
          <div>
              <Navbar></Navbar>
               <div  className=" w-full ">
               <Outlet></Outlet>
               </div>
          </div>
     );
};

export default Main;