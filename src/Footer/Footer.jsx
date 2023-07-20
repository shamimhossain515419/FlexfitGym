import Container from "../Component/Container/Container";
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlinePhone ,AiFillYoutube,AiFillGithub,AiOutlineMail} from 'react-icons/ai';
import { FcGoogle} from 'react-icons/fc';
import { FaFacebook} from 'react-icons/fa';
const Footer = () => {
     return (
          <div className=" mt-10   bg-[#0B0B0B] p-2">

               <Container>
                    <div className=" text-white  grid md:grid-cols-3 gap-10 ">
                         <div>
                              <h1 className=" text-2xl font-medium  my-5"> About Page</h1>
                              <p>At our gym, we are passionate about promoting health, fitness, and overall well-being. Our mission is to create a supportive and motivating environment where people of all fitness levels can achieve their goals, maintain a healthy lifestyle, and find their inner strength. </p>
                              <div className=" mt-10 flex gap-8 items-center">
                                   <FcGoogle size={28} className=" cursor-pointer"></FcGoogle>
                                   <FaFacebook  size={28} className=" cursor-pointer  text-[#0a68f5] "></FaFacebook>
                                   <AiFillGithub  size={28} className=" text-[#4a4646] cursor-pointer"></AiFillGithub>
                                   <AiFillYoutube  size={28} className=" text-[#fc1111e1] cursor-pointer"></AiFillYoutube>

                              </div>

                         </div>
                         <div>
                              <h1 className=" text-2xl font-medium  my-5"> Contact</h1>
                             
                              <p className=" underline">Blog</p>
                              <p className=" underline">portfolio</p>
                              <p className=" underline">Services</p>
                              <p className=" underline">About</p>
                         </div>
                         <div>
                              <h1 className=" text-2xl font-medium  my-5"> NEWSLETTER </h1>
                              <div className=" flex items-center relative  ">

                                   <input type="email" className="  relative text-xl w-full  outline-none border-none font-medium placeholder:text-xl placeholder:font-medium py-2 px-2 bg-[#413e3eeb] text-white " placeholder=" Email" name="" id="" />
                                   <button className="  absolute  right-0 outline-none  h-full    border-none bgColor   px-10">Send</button>
                              </div>
                              <div className=" mt-8">
                                   <div className=" flex gap-2 items-center ">
                                        <CiLocationOn></CiLocationOn>
                                        <p> 8313 Indianapolis, United States </p>
                                   </div>
                                   <div className=" flex gap-2 items-center ">
                                        <AiOutlinePhone></AiOutlinePhone>
                                        <p> +081444356734 </p>
                                   </div>
                                   <div className=" flex gap-2 items-center ">
                                        <AiOutlineMail></AiOutlineMail>
                                        <p>flexfitgay@gmail.com </p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </Container>
          </div>
     );
};

export default Footer;