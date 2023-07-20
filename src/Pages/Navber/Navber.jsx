import { useState } from "react";

import {NavLink} from 'react-router-dom'
import { AiOutlineMail } from 'react-icons/ai';
import Container from "../../Component/Container/Container";

const Navbar = () => {

     const [isOpen,setIsOpen]=useState(false)
     return (
          <div className=" shadow-sm bg-white px-10 w-full">
               <Container>
               <nav className="flex items-center justify-between flex-wrap p-6">
                    <div className="flex items-center flex-shrink-0  mr-6 lg:mr-72">
                          <h1 className=" textColor text-2xl font-medium "> FlexFit Gym</h1>
                    </div>
                    <div className="block lg:hidden">
                         <button
                              onClick={() => setIsOpen(!isOpen)}
                              className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
                         >
                              <svg
                                   className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
                                   viewBox="0 0 20 20"
                                   xmlns="http://www.w3.org/2000/svg"
                              >
                                   <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                              </svg>
                              <svg
                                   className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
                                   viewBox="0 0 20 20"
                                   xmlns="http://www.w3.org/2000/svg"
                              >
                                   <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                              </svg>
                         </button>
                    </div>
                    <div
                         className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
                    >
                         <div className="text-base  uppercase lg:flex-grow">
                              <NavLink   to={'/'} className= {({isActive})=> isActive ? "block mt-4 lg:inline-block textColor lg:mt-0 text-white-200 mr-4" : "block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"} >
                                   Home
                              </NavLink>
                              <NavLink  to={'/about'} className= {({isActive})=> isActive ? "block mt-4 lg:inline-block textColor lg:mt-0 text-white-200 mr-4" : "block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"} >
                                   About
                              </NavLink>
                              <NavLink  to={'/services'} className= {({isActive})=> isActive ? "block mt-4 lg:inline-block textColor lg:mt-0 text-white-200 mr-4" : "block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"} >
                                   Services
                              </NavLink>
                              <NavLink  to={'/blog'} className= {({isActive})=> isActive ? "block mt-4 lg:inline-block textColor lg:mt-0 text-white-200 mr-4" : "block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"} >
                                   Blog
                              </NavLink>
                         </div>
                         <div className="  gap-2">
                             <div className="   rounded-s-2xl flex gap-2 items-center border-0    bgColor py-2 px-4 text-white">
                               <AiOutlineMail></AiOutlineMail>   <span>flexfitgay@gmail.com</span>
                              </div>
                         </div>
                    </div>
               </nav>  
               </Container>

               
          </div>
     );
};

export default Navbar;