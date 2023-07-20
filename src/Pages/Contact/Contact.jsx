import Container from '../../Component/Container/Container';
import Title from '../../Component/Tittle/title';
import './Contact.css'

import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
     return (
          <div className=' my-10 contactBg'>
               <Container>
                    <div className='  my-10'>
                         <Title title={"GET IN TOUCH"} paragraph={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}></Title>
                         <div className=' w-full mx-auto'>
                              <div className=' md:flex   justify-center gap-10  mt-7 w-full '>
                                   <div className='  w-[300px]   flex justify-center  text-white items-center flex-col gap-3 bg-[#6e6c6ce6] p-4 '>
                                        <FaMapMarkerAlt size={30} className='textColor '></FaMapMarkerAlt>
                                        <p className=' text-xl font-medium'>8313 Indianapolis, United States</p>
                                   </div>
                                   <div className='  w-[300px]  flex justify-center  text-white items-center flex-col gap-3 bg-[#6e6c6ce6] p-4 '>
                                        <AiOutlineMail size={30} className='textColor '></AiOutlineMail>
                                        <p className=' text-xl font-medium'>flexfitgay@gmail.com</p>
                                   </div>
                                   <div className=' w-[300px]    flex justify-center  text-white items-center flex-col gap-3 bg-[#6e6c6ce6] p-4 '>
                                        <BsFillTelephoneFill size={30} className='textColor '></BsFillTelephoneFill>
                                        <p className=' text-xl font-medium'>+081444356734</p>
                                   </div>
                                   <div></div>
                                   <div></div>
                              </div>
                         </div>
                    </div>
                    <div className='  mt-8 grid md:grid-cols-7 gap-8 items-center '>
                         <div className='  col-span-3 '>
                              <form method="" action="">

                                   <div className=' w-full '>
                                        <input type="text" className=' bg-[#6e6c6ce6] w-full outline-none border-none  py-2  placeholder:text-white font-medium text-white ml-2 px-2' name="" placeholder='Full Name' id="" />
                                   </div>
                                   <div className=' w-full  my-8'>
                                        <input type="email" className=' bg-[#6e6c6ce6] w-full outline-none border-none  py-2  placeholder:text-white font-medium text-white ml-2 px-2' name="" placeholder='Your Email' id="" />
                                   </div>
                                   <div className=' w-full  my-8'>
                                        <textarea className=' bg-[#6e6c6ce6] w-full outline-none border-none  py-2  placeholder:text-white font-medium text-white ml-2 px-2' name="" id="" cols="30" rows="10" placeholder='Your massage'></textarea>

                                   </div>


                              </form>
                         </div>
                         <div className=' col-span-4 h-full'>
                              <iframe className='  w-full   pb-10  h-full    ' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d160543.9608268662!2d-87.68733689582486!3d41.60980164574945!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8811e0ba1df0d259%3A0x80c28bdfdc161b51!2sWorld%20Gym%20Highland!5e0!3m2!1sen!2sbd!4v1689838993076!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" ></iframe>
                         </div>
                    </div>
                    <div>
                         <button className='  ml-2 text-xl bg-black py-2 px-8 text-white font-medium  ' type='submit'>Submit</button>
                    </div>

               </Container>
          </div>
     );
};

export default Contact;