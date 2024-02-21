import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';
import slider1 from '../../../../public/assets/home/slide1.jpg'
import slider2 from '../../../../public/assets/home/slide2.jpg'
import slider3 from '../../../../public/assets/home/slide3.jpg'
import slider4 from '../../../../public/assets/home/slide4.jpg'
import slider5 from '../../../../public/assets/home/slide5.jpg'
import slider6 from '../../../../public/assets/home/slider6.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';


const FoodCategory = () => {
    return (
        <section>
            <SectionTitle
            subHeading={"From 11.00am to 10.00pm"}
            heading={"ONLINE ORDER"}

            ></SectionTitle>
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
            <img src={slider1} alt="" />
            <h5 className='text-4xl uppercase -mt-20 text-white ml-16'>SALADS</h5>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider2} alt="" />
            <h5 className='text-4xl uppercase -mt-20 text-white ml-16'>SOUPS</h5>
        </SwiperSlide>
        <SwiperSlide> 
        <img src={slider3} alt="" />
            <h5 className='text-4xl uppercase -mt-20 text-white ml-16'>PIZZAS</h5>
        </SwiperSlide>
        <SwiperSlide> 
        <img src={slider4} alt="" />
            <h5 className='text-4xl uppercase -mt-20 text-white ml-16'>BERGER</h5>
        </SwiperSlide>
        <SwiperSlide> 
        <img src={slider5} alt="" />
            <h5 className='text-4xl uppercase -mt-20 text-white ml-16'>DESSERTS</h5>
        </SwiperSlide>
        <SwiperSlide> 
        <img className='w-72' src={slider6} alt="" />
            <h5 className='text-4xl uppercase -mt-20 text-white ml-16 '>HONEY</h5>
        </SwiperSlide>
        </Swiper>
        </section>
    );
};

export default FoodCategory;