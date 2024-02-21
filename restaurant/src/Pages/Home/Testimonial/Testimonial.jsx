import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
// import { json } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className='my-24'>
            <SectionTitle

                subHeading={"what Our Clients Say"}
                heading={"TESTIMONIALS"}
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id} review={review}>
                        <div className='flex flex-col justify-center items-center mx-28 my-16'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />

                            <p className='my-6'>{review.details}</p>
                            <h3 className="text-2xl text-orange-700">
                                {review.name}
                            </h3>
                        </div>
                   

                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonial;