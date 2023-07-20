
const About = () => {
     return (
          <div className=" mt-7 ">
               <div className=" p-2 space-y-2 border-l-2 border-[#E4007C]">
                    <h1 className="  text-xl md:text-5xl font-bold  ">WELCOME TO OUR   <span className=" text-[#E4007C]"> FlexFit Gym</span>
                    </h1>
                    <p className="  text-lg font-medium "> KEEP YOUR BODY FIT & STRONG</p>
               </div>

               <div className=" my-7 mt-10 space-y-3">
                    <h1 className=" text-xl  md:text-3xl font-semibold"> KNOW ABOUT <span className=" text-[#E4007C]  text-xl  md:text-3xl font-semibold"> FlexFit Gym</span></h1>

                    <p className=" text-base font-medium"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
               </div>

               <div className="  grid md:grid-cols-5 gap-3 ">
                    <div className=" grid md:grid-cols-2 gap-4 col-span-3">
                         <div className="    space-y-2">
                              <h1 className="  uppercase  text-xl font-medium"> Personal Training</h1>
                              <p className=" text-base font-medium my-4"> They may have certified personal trainers who can create personalized workout plans and provide one-on-one coaching to help members reach their fitness goals.</p>
                         </div>
                         <div className="    space-y-2">
                              <h1 className="  uppercase  text-xl font-medium"> Group Training</h1>
                              <p className=" text-base font-medium my-4">In addition to individual training, FlexFit Gym might conduct group training sessions to motivate and challenge members in a social environment.</p>
                         </div>
                         <div className="    space-y-2">
                              <h1 className="  uppercase  text-xl font-medium"> Cardio and Strength Equipment:</h1>
                              <p className=" text-base font-medium my-4">Gyms usually have a range of cardio machines (treadmills, ellipticals, stationary bikes, rowers, etc.) and strength training equipment (dumbbells, barbells, machines) for members to use..</p>
                         </div>
                         <div className="    space-y-2">
                              <h1 className="  uppercase  text-xl font-medium"> Nutritional Guidance:</h1>
                              <p className=" text-base font-medium my-4"> Some gyms may offer nutritional counseling or workshops to help members with their dietary habits.</p>
                         </div>
                         <div className="    space-y-2">
                              <h1 className="  uppercase  text-xl font-medium"> Specialized Programs:</h1>
                              <p className=" text-base font-medium my-4">FlexFit Gym might offer specialized programs like weight loss challenges, muscle-building programs, or sports-specific training.</p>
                         </div>
                         <div className="    space-y-2">
                              <h1 className="  uppercase  text-xl font-medium"> Fitness Classes</h1>
                              <p className=" text-base font-medium my-4">FlexFit Gym might offer a variety of fitness classes such as strength training, cardio workouts, yoga, Pilates, spinning, HIIT (High-Intensity Interval Training), Zumba, and more..</p>
                         </div>
                    </div>
                    <div className=" col-span-2 ">
                         <img className="  h-[400px]" src="https://i.ibb.co/vXNLgpv/My-project.png" alt="" />
                    </div>
               </div>
          </div>
     );
};

export default About;