import Marquee from "react-fast-marquee";
import Container from "../../../Component/Container/Container";
import SliderBar from "./SliderBar";
import About from "../../About/About";
import Course from "../../Coursh/Coursh";
import Product from "../../product/Product";
import Gallery from "../../Gallary/Gallary";
import Contact from "../../Contact/Contact";
import Footer from "../../../Footer/Footer";


const Home = () => {
     return (
          <div>
               <SliderBar></SliderBar>
               <Container>

                    <div className=" mt-10">
                    <Marquee pauseOnHover>
                          <div className=" mt-4  flex gap-10  overflow-hidden">
                         <div className="  my-3 rounded-md overflow-hidden relative    h-72   w-72">
                             <img className=" w-full h-full relative " src="https://img.freepik.com/free-photo/fit-young-woman-doing-workout-fitness-center_23-2147827505.jpg?w=1380&t=st=1689788202~exp=1689788802~hmac=e94a91a262d10f5ce0e6a4ab4234176db1d507e79dbf45af824f43d268908aba" alt="" />

                              <div className=" px-4 flex justify-center items-center flex-col gap-2 text-white absolute top-0 left-0 bottom-0 w-full bg-[#e4007d5b]">
                                <h1 className=" uppercase text-2xl font-semibold ">Wight lefting </h1>
                                <hr className="  mx-10  bg-black w-full " />
                                <p className=" uppercase  text-lg"> Make  your body fit</p>
                              </div>
                         </div>
                         <div className="  my-3 rounded-md overflow-hidden relative    h-72   w-72">
                             <img className=" w-full h-full relative " src="https://img.freepik.com/free-photo/muscular-young-woman-athlete-with-skipping-rope-black_155003-9587.jpg?w=740&t=st=1689818264~exp=1689818864~hmac=543829db9b331bc9a92b53fe0c703ce6ad4f5ba108852b7b480b0c6e9f1b6abd" alt="" />

                              <div className=" px-4 flex justify-center items-center flex-col gap-2 text-white absolute top-0 left-0 bottom-0 w-full bg-[#e4007d5b]">
                                <h1 className=" uppercase text-2xl font-semibold ">Jump Rope training </h1>
                                <hr className="  mx-10  bg-black w-full " />
                                <p className=" uppercase  text-lg"> Make  your body fit</p>
                              </div>
                         </div>
                         <div className="  my-3 rounded-md overflow-hidden relative    h-72   w-72">
                             <img className=" w-full h-full relative " src="https://img.freepik.com/free-photo/girl-stretching-back_1149-1075.jpg?w=740&t=st=1689817841~exp=1689818441~hmac=101137b64e920b5f8b241690534951096af75ae3d03732011ce1c87d2fde6232" alt="" />

                              <div className=" px-4 flex justify-center items-center flex-col gap-2 text-white absolute top-0 left-0 bottom-0 w-full bg-[#e4007d5b]">
                                <h1 className=" uppercase text-2xl font-semibold ">Yoga training </h1>
                                <hr className="  mx-10  bg-black w-full " />
                                <p className=" uppercase  text-lg"> Make  your body fit</p>
                              </div>
                         </div>
                         <div className="  my-3 rounded-md overflow-hidden relative    h-72   w-72">
                             <img className=" w-full h-full relative " src="https://img.freepik.com/free-photo/sexy-muscular-woman-working-out-with-two-dumbbells_231208-3320.jpg?w=740&t=st=1689818467~exp=1689819067~hmac=e1385c20a583d6c2a984013eacc2cd70a8569b902f149d70e0917c2a9f42d3fd" alt="" />

                              <div className=" px-4 flex justify-center items-center flex-col gap-2 text-white absolute top-0 left-0 bottom-0 w-full bg-[#e4007d5b]">
                                <h1 className=" uppercase text-2xl font-semibold ">Pull-Up  training </h1>
                                <hr className="  mx-10  bg-black w-full " />
                                <p className=" uppercase  text-lg"> Make  your body fit</p>
                              </div>
                         </div>
                         <div className="  my-3 rounded-md overflow-hidden relative    h-72   w-72">
                             <img className=" w-full h-full relative " src="https://img.freepik.com/free-photo/happy-healthy-woman-with-yoga-mat_329181-3573.jpg?w=740&t=st=1689818758~exp=1689819358~hmac=2941853fd2df4495fbf310b421d9dab59029f69b99efa80400397041b7941541" alt="" />

                              <div className=" px-4 flex justify-center items-center flex-col gap-2 text-white absolute top-0 left-0 bottom-0 w-full bg-[#e4007d5b]">
                                <h1 className=" uppercase text-2xl font-semibold ">Plyo Box training </h1>
                                <hr className="  mx-10  bg-black w-full " />
                                <p className=" uppercase  text-lg"> Make  your body fit</p>
                              </div>
                         </div>
                         <div className="  my-3 rounded-md overflow-hidden relative    h-72   w-72">
                             <img className=" w-full h-full relative " src="https://img.freepik.com/free-photo/beautiful-woman-working-out-with-dumbbells_144627-2794.jpg?w=740&t=st=1689818594~exp=1689819194~hmac=2e8a9a3127ef8c378a5d4ccff8344680e5a42eec3012128a122d9f363117a01d" alt="" />

                              <div className=" px-4 flex justify-center items-center flex-col gap-2 text-white absolute top-0 left-0 bottom-0 w-full bg-[#e4007d5b]">
                                <h1 className=" uppercase text-2xl font-semibold ">Kettle training </h1>
                                <hr className="  mx-10  bg-black w-full " />
                                <p className=" uppercase  text-lg"> Make  your body fit</p>
                              </div>
                         </div>

                         </div>
                       

                         </Marquee>
                    </div>
               </Container>

                <div className=" bg-[#F5F5F5] p-2">
                <Container>
                 <About></About>
                 </Container>
                </div>

                <Course></Course>

                <Product></Product>
                <Gallery></Gallery>
                <Contact></Contact>
                <Footer></Footer>
          </div>
     );
};

export default Home;