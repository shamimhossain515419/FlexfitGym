import React from 'react';
import Title from '../../Component/Tittle/title';
import Container from '../../Component/Container/Container';

const Course = () => {
     return (
         <div className='  mb-8'>
           <Container>
           <div className=' mt-10'>
              <Title title={"OUR COURSES"} paragraph={" It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}></Title> 
               
          </div>

          <div className=' mt-10 grid md:grid-cols-3 xl:grid-cols-4 gap-6'>

               <div className=' rounded-md overflow-hidden bg-[#F5F5F5]'>
                    <div className=' relative '>
                     <img className=' h-72  relative'  src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" alt="" />
                     <p className='bgColor absolute right-0 top-0 px-6 py-1 text-white text-base font-medium'>  Course fee 80$ </p>
                    </div>
                    <div  className='  p-4 '>
                          <h1 className='text-2xl font-medium my-1'> Strength Training </h1>
                          <h3 className=' text-lg font-bold'> Time: 3 Month</h3>
                           <p className=' text-base '> This course focuses on building muscular strength and endurance through weightlifting and resistance exercises. Participants will learn proper lifting techniques and work with various gym equipment to target different muscle groups.</p>

                    </div>
               </div>
               <div className=' rounded-md overflow-hidden bg-[#F5F5F5]'>
                    <div className=' relative '>
                     <img className=' h-72 w-full object-cover  relative'  src="https://img.freepik.com/free-photo/medium-shot-woman-wearing-glove_23-2149137072.jpg?w=740&t=st=1689825358~exp=1689825958~hmac=30c80e5097ed3a6563ff51252fcba4f9d8b730f9bdc7ceaaa9c273ed5150ef76" alt="" />
                     <p className='bgColor absolute right-0 top-0 px-6 py-1 text-white text-base font-medium'>  Course fee 50$ </p>
                    </div>
                    <div  className='  p-4 '>
                          <h1 className='text-2xl font-medium my-1'>Cardio Kickboxing </h1>
                          <h3 className=' text-lg font-bold'> Time: 3 Month</h3>
                           <p className=' text-base '>A high-energy class that combines cardio exercises with elements of kickboxing. Participants will punch, kick, and perform other martial arts-inspired moves to improve cardiovascular fitness and burn calories.</p>

                    </div>
               </div>
               <div className=' rounded-md overflow-hidden bg-[#F5F5F5]'>
                    <div className=' relative '>
                     <img className=' h-72  relative  w-full object-cover'  src="https://img.freepik.com/free-photo/young-woman-sportswear-meditating_1163-848.jpg?w=740&t=st=1689825592~exp=1689826192~hmac=6da5fccb333a782fc29803b0a1babf73068461736f704c9fe4eb8f1c30795831" alt="" />
                     <p className='bgColor absolute right-0 top-0 px-6 py-1 text-white text-base font-medium'>  Course fee 70$ </p>
                    </div>
                    <div  className='  p-4 '>
                          <h1 className='text-2xl font-medium my-1'>Yoga Flow </h1>
                          <h3 className=' text-lg font-bold'> Time: 3 Month</h3>
                           <p className=' text-base '> TThis course is designed to improve flexibility, balance, and mindfulness. Participants will flow through different yoga poses while focusing on breath and body alignment.</p>

                    </div>
               </div>
               <div className=' rounded-md overflow-hidden bg-[#F5F5F5]'>
                    <div className=' relative '>
                     <img className=' h-72  relative  w-full object-cover'  src="https://img.freepik.com/free-photo/happy-girl-doing-fitness-exercises_144627-26720.jpg?w=1380&t=st=1689825702~exp=1689826302~hmac=20db1b46172fcd2fb1f3ccf4f505e2ce833817f5fef08bf84495ea02f11ccd2f" alt="" />
                     <p className='bgColor absolute right-0 top-0 px-6 py-1 text-white text-base font-medium'>  Course fee 40$ </p>
                    </div>
                    <div  className='  p-4 '>
                          <h1 className='text-2xl font-medium my-1'> Pilates Core Fusion</h1>
                          <h3 className=' text-lg font-bold'> Time: 2 Month</h3>
                           <p className=' text-base '>A low-impact workout that focuses on core strength, flexibility, and body awareness. Participants will perform controlled movements to engage deep core muscles.</p>

                    </div>
               </div>
               <div className=' rounded-md overflow-hidden bg-[#F5F5F5]'>
                    <div className=' relative '>
                     <img className=' h-72  w-full object-cover  relative'  src="https://img.freepik.com/free-photo/young-woman-working-out-street_23-2148213204.jpg?w=1380&t=st=1689825871~exp=1689826471~hmac=635c5cc9280e5ad55d97ce498abe9ed8b1d2cbddf1e372450c25cb4810f4dfa7" alt="" />
                     <p className='bgColor absolute right-0 top-0 px-6 py-1 text-white text-base font-medium'>  Course fee 80$ </p>
                    </div>
                    <div  className='  p-4 '>
                          <h1 className='text-2xl font-medium my-1'> Functional Fitness Circuit </h1>
                          <h3 className=' text-lg font-bold'> Time: 3 Month</h3>
                           <p className=' text-base '>A course that emphasizes functional movements to improve overall fitness and body mechanics. Participants will rotate through various exercise stations targeting different muscle groups.</p>

                    </div>
               </div>
               <div className=' rounded-md overflow-hidden bg-[#F5F5F5]'>
                    <div className=' relative '>
                     <img className=' h-72   w-full object-cover  relative'  src="https://img.freepik.com/free-photo/data-stats-around-person-doing-physical-activity_23-2150165169.jpg?w=740&t=st=1689825795~exp=1689826395~hmac=81da10e0ecfcb916324554757d8482e684b995c7c5fd73a49f3d58b306224081" alt="" />
                     <p className='bgColor absolute right-0 top-0 px-6 py-1 text-white text-base font-medium'>  Course fee 100$ </p>
                    </div>
                    <div  className='  p-4 '>
                          <h1 className='text-2xl font-medium my-1'>Spinning/Cycling</h1>
                          <h3 className=' text-lg font-bold'> Time: 4 Month</h3>
                           <p className=' text-base '> An indoor cycling class that simulates outdoor biking with varying intensities and resistance levels. It's a great cardiovascular workout that also strengthens leg muscles..</p>

                    </div>
               </div>
               <div className=' rounded-md overflow-hidden bg-[#F5F5F5]'>
                    <div className=' relative '>
                     <img className=' h-72  relative  w-full object-cover'  src="https://img.freepik.com/premium-photo/young-woman-lotus-position_253658-13818.jpg?w=740" alt="" />
                     <p className='bgColor absolute right-0 top-0 px-6 py-1 text-white text-base font-medium'>  Course fee 60$ </p>
                    </div>
                    <div  className='  p-4 '>
                          <h1 className='text-2xl font-medium my-1'> Mindful Meditation </h1>
                          <h3 className=' text-lg font-bold'> Time: 2 Month</h3>
                           <p className=' text-base '>  This course focuses on relaxation and stress reduction through mindfulness and meditation techniques. Participants will learn how to quiet the mind and find inner peace.</p>

                    </div>
               </div>
               <div className=' rounded-md overflow-hidden bg-[#F5F5F5]'>
                    <div className=' relative '>
                     <img className=' h-72  relative'  src="https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                     <p className='bgColor absolute right-0 top-0 px-6 py-1 text-white text-base font-medium'>  Course fee 80$ </p>
                    </div>
                    <div  className='  p-4 '>
                          <h1 className='text-2xl font-medium my-1'> Senior Fitness</h1>
                          <h3 className=' text-lg font-bold'> Time: 3 Month</h3>
                           <p className=' text-base '>A fitness class designed for older adults to improve strength, balance, and flexibility. The exercises are modified to meet the needs and abilities of older participants.

Remember that</p>

                    </div>
               </div>
          </div>
         </Container>
         </div>
     );
};

export default Course;