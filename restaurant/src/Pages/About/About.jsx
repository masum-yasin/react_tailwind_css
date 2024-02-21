import React from "react";
import aboutbanner from "../../../public/assets/about/aboutbanner.jpg";
import integrate from "../../../public/assets/about/integrade.jpg";
import integrate2 from "../../../public/assets/about/integrade2.jpg";
import aboutfix1 from "../../../public/assets/about/aboutfix.jpg";
import aboutbackground from "../../../public/assets/about/aboutfood.jpg";


// chef photo section//
import chef1 from '../../../public/assets/about/chef1.jpg'
import chef2 from '../../../public/assets/about/chef2.jpg'
import chef3 from '../../../public/assets/about/chef3.jpg'
import chef4 from '../../../public/assets/about/chef4.jpg'
import chef5 from '../../../public/assets/about/chef5.jpg'
import chef6 from '../../../public/assets/about/chef6.jpg'
import chef7 from '../../../public/assets/about/chef7.jpg'
import chef8 from '../../../public/assets/about/chef8.jpg'

import ReadMore from "../../Components/ReadMore/ReadMore";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from "swiper/modules";




const About = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${aboutbanner})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold italic">
              About Our Restaurant
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h5 className="text-red-600 text-2xl italic text-center">
          Italian Restaurant
        </h5>
        <h2 className="text-4xl italic text-yellow-600 text-center">
          Our History
        </h2>
        <p className="text-center font-bold italic mt-3">
          As a whole, Italy is comparatively a young country. The Kingdom of
          Italy was officially formed in <br></br> 1861 through the unification
          of many existing city-states. The merging process took many years
          <br></br> because not everyone was pleased with the idea of unifying.
          In 1871, the official capital of Italy<br></br> moved from Florence to
          Rome, and Italy became fully united. The republic known today emerged
          <br></br> after World War II. Since Italy was formed by uniting
          several city-states and cultures, the history <br></br> of Italian
          food can become more complex. Each region in Italy has its own culture
          with distinct <br></br> food traditions and specialties. While some of
          these distinctions have faded over time, many <br></br> food
          traditions still differentiate regions. Many external factors played a
          role in the dishes<br></br> created by each region and the
          availability of ingredients.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 ">
        <div className="col-span-2 flex flex-wrap gap-4">
        <img src={integrate2} alt="" style={{ width: "300px" }} />
          <img src={integrate} alt="" style={{ width: "300px" }} />
        </div>
        <div className="col-span-1">
        <h6 className="italic text-red-800 text-2xl">This is Our Secrets</h6>
        <h1 className="-mt-4 text-4xl text-yellow-600">Perfect Ingredients</h1>
        <p className="mt-8 italic font-bold">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

        <ReadMore></ReadMore>
        <button className="btn btn-outline btn-warning mt-8 w-72">More Red</button>
         </div>
      </div>
     
     <div><img src={aboutfix1} alt="" className="h-[400px] w-full mb-10" /></div>
     <section>
     <h1 className="uppercase text-yellow-600 text-4xl text-center mt-10 italic">MEET OUR EXPERT CHEFS</h1>

     <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mb-24 mt-16"
      >
        <SwiperSlide>
            <img src={chef1} alt="" />
            <h6 className="text-center text-green-600 italic">Senoir Cooker</h6>
            <h4 className='text-4xl uppercase mt-3 text-yellow-600 text-center'>MATEO LEVI</h4>
        </SwiperSlide>
        <SwiperSlide>
        <img src={chef2} alt="" />
        <h6 className="text-center text-green-600 italic">Sr Table Manager</h6>
            <h4 className='text-4xl uppercase mt-3 text-yellow-600 text-center'>HENRY LUCAS</h4>
        </SwiperSlide>
        <SwiperSlide> 
        <img src={chef3} alt="" />
        <h6 className="text-center text-green-600 italic">Senoir Cooker</h6>
            <h4 className='text-4xl uppercase  mt-3 text-yellow-600 text-center'>ALEXANDER</h4>
        </SwiperSlide>
        <SwiperSlide> 
        <img src={chef4} alt="" className="h-[440px]" />
        <h6 className="text-center text-green-600 italic">Sr Table Manager</h6>
            <h4 className='text-4xl uppercase mt-3 text-yellow-600 text-center'>Harrison</h4>
        </SwiperSlide>
        <SwiperSlide> 
        <img src={chef5} alt="" className="h-[440px]" />
        <h6 className="text-center text-green-600 italic">Sr Table Manager</h6>
            <h4 className='text-4xl uppercase mt-3 text-yellow-600 text-center'>Remington</h4>
        </SwiperSlide>
        <SwiperSlide>  
        <img className='w-72' src={chef6} alt="" />
        <h6 className="text-center text-green-600 italic">Sr Table Manager</h6>
      
            <h4 className='text-4xl uppercase  mt-3 text-yellow-600 text-center '>Alexander</h4>
        </SwiperSlide>
        <SwiperSlide> 
        <img className='w-72' src={chef7} alt="" />
        <h6 className="text-center text-green-600 italic">Head Chef</h6>
            <h4 className='text-4xl uppercase  mt-3 text-yellow-600 text-center '>Jackson</h4>
        </SwiperSlide>
        <SwiperSlide> 
        <img className='w-72' src={chef8} alt="" />
        <h6 className="text-center text-green-600 italic">Sr Table Manager</h6>
            <h4 className='text-4xl uppercase  mt-3 text-yellow-600 text-center '>Oliver</h4>
        </SwiperSlide>
        </Swiper>
     </section>
     <section className="bg-cover bg-center h-[520px] w-full mx-auto flex justify-center items-center mt-0" style={{backgroundImage:`url(${aboutbackground})`}}>
   

{/* form section */}

<div className="relative w-screen h-screen flex justify-center items-center">
  <div className="absolute top-1/2 transform -translate-y-1/2 left-10">
  <h1 className=" text-5xl text-indigo-600">Please Book Now</h1>
    <div className="hero bg-base-200">
   <di>
  <div className="card">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Number of Person</span>
              </label>
              <input
                type="text"
                placeholder=" Number of Person"
                className="input input-bordered"
                required
              />
               <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                placeholder="Booking Date"
                className="input input-bordered"
                required
              />
            
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">SUBMIT</button>
            </div>
          </form>
        </div>
      </di>
    </div>
  </div>
</div>



    
     </section>

   
</>
  );
};

export default About;
