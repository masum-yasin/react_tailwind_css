import React from 'react';
import SectionTitle from './../../../Components/SectionTitle/SectionTitle';
import featuredimg from '../../../../public/assets/home/features3.jpg'
import './Features.css'

const Featured = () => {
    return (
        <section className='featuredItem bg-fixed text-white pt-8 my-16'>
           <SectionTitle subHeading={"Check it Out"} heading={"FROM OUR MENU"}></SectionTitle>
           <div className='md:flex justify-center items-center pb-20 pt-14 px-36 gap-10 bg-slate-450 bg-opacity-35'>
           <div>
            <img className='w-[500px]' src={featuredimg } alt="" />
            </div>
            <div className='md:ml-10'>
                <p>Aug 20, 2024</p>
                <p className='Uppercase'>Where Can I Get Some?</p>
                <p>Delicious meals are tasty, appetizing, scrumptious,<br></br> yummy, luscious, delectable, mouth-watering, fit<br></br> for a king, delightful, lovely, wonderful, pleasant,<br></br> enjoyable, appealing, enchanting, charming </p>
                <button className="btn btn-outline btn-success mt-5 border-0 border-b-4">ORDER NOW</button>
            </div>
           </div>
        </section>
    );
};

export default Featured;