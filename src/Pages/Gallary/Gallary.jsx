import { useState } from "react";
import Container from "../../Component/Container/Container";
import Title from "../../Component/Tittle/title";


const Gallery = () => {


     return (
          <div className=" my-10">
          <Container>
               <Title title={"Gallery"} paragraph={" At FlexFit Gym, we take pride in providing a top-notch fitness experience for our members. Our gym gallery offers a glimpse into the world of fitness,"}></Title>

               <div className=" my-5  flex justify-center flex-wrap items-center gap-8 ">
                    <button className=" rounded-lg text-xl text-white px-3  p-1 border border-[#E4007C]    bg-[#E4007C] ">All</button>
                    <button className=" rounded-lg text-xl hover:text-white px-3  p-1 border border-[#E4007C]  text-[#E4007C] bg-transparent hover:bg-[#E4007C]  ">Yoga</button>
                    <button className=" rounded-lg text-xl hover:text-white px-3  p-1 border border-[#E4007C]  text-[#E4007C] bg-transparent hover:bg-[#E4007C]  ">Running</button>
                    <button className=" rounded-lg text-xl hover:text-white px-3  p-1 border border-[#E4007C]  text-[#E4007C] bg-transparent hover:bg-[#E4007C]  ">Strength </button>
                    <button className=" rounded-lg text-xl hover:text-white px-3  p-1 border border-[#E4007C]  text-[#E4007C] bg-transparent hover:bg-[#E4007C]  ">Spinning </button>
               </div>

               <div className="  md:px-32 lg:px-40">
               <div className=" grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 "> 
                    <div  className=" relative">
                         <img className="   w-full object-cover relative   h-72   " src="https://img.freepik.com/free-photo/young-beautiful-woman-training-gym-concept-fitness-workout-sport-health_155003-20112.jpg?size=626&ext=jpg&ga=GA1.2.824354190.1681013433&semt=ais" alt="" />
                         <div className={`  absolute transition ease-in-out delay-150 top-0 w-full  h-full hover:bg-[#000000a1]`}></div>
                    </div>
                    <div className=" relative">
                         <img className=" w-full object-cover relative   h-72   " src="https://img.freepik.com/free-photo/fitness-woman-gym-is-doing-different-exercises-make-her-body-more-strong_231208-3385.jpg?size=626&ext=jpg&ga=GA1.2.824354190.1681013433&semt=ais" alt="" /><div className={`  absolute transition ease-in-out delay-150 top-0 w-full  h-full hover:bg-[#000000a1]`}></div>
                    </div>
                    <div className=" relative">
                         <img className=" w-full object-cover relative   h-72   " src="https://images.pexels.com/photos/6339452/pexels-photo-6339452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /><div className={`  absolute transition ease-in-out delay-150 top-0 w-full  h-full hover:bg-[#000000a1]`}></div>
                    </div>
                    <div className=" relative">
                         <img className=" w-full object-cover relative   h-72   " src="https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" /><div className={`  absolute transition ease-in-out delay-150 top-0 w-full  h-full hover:bg-[#000000a1]`}></div>
                    </div>
                    <div className=" relative">
                         <img className=" w-full object-cover relative   h-72   " src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" /><div className={`  absolute transition ease-in-out delay-150 top-0 w-full  h-full hover:bg-[#000000a1]`}></div>
                    </div>
                    <div className=" relative">
                         <img className=" w-full object-cover relative   h-72   " src="https://img.freepik.com/free-photo/pretty-woman-gym_624325-4155.jpg?w=740&t=st=1689782010~exp=1689782610~hmac=d7e5091d68e5b339cad9b79cbdd8b906343fca816434ab14116b422273d4fbee" alt="" /><div className={`  absolute transition ease-in-out delay-150 top-0 w-full  h-full hover:bg-[#000000a1]`}></div>
                    </div>
                    <div className=" relative">
                         <img className=" w-full object-cover relative   h-72   " src="https://img.freepik.com/free-photo/sports-couple-is-working-out-gym-fitness-woman-doing-exercising-with-dumbbells-muscular-macho-man-showing-muscles-straining_613910-16733.jpg?size=626&ext=jpg&ga=GA1.2.824354190.1681013433&semt=ais" alt="" /><div className={`  absolute transition ease-in-out delay-150 top-0 w-full  h-full hover:bg-[#000000a1]`}></div>
                    </div>
                    <div className=" relative">
                         <img className=" w-full object-cover relative   h-72   " src="https://img.freepik.com/free-photo/happy-girl-doing-fitness-exercises_144627-26720.jpg?w=1380&t=st=1689825702~exp=1689826302~hmac=20db1b46172fcd2fb1f3ccf4f505e2ce833817f5fef08bf84495ea02f11ccd2f" alt="" /><div className={`  absolute transition ease-in-out delay-150 top-0 w-full  h-full hover:bg-[#000000a1]`}></div>
                    </div>
               </div>
               </div>
          </Container>
          </div>
     );
};

export default Gallery;