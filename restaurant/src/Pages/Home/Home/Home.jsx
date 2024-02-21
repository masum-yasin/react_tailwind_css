import React from 'react';
import Banner from '../Banner/Banner';
import FoodCategory from '../FoodCategory/FoodCategory';
import PopularMenu from '../PopularMenu/PopularMenu';
import BestoBackground from '../BestoBackground/BestoBackground';
import ChefRecommend from '../ChefRecommend/ChefRecommend';
import Featured from '../Featured/Featured';
import Testimonial from '../Testimonial/Testimonial';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Frosted Grill| Home</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>

            <Banner></Banner>
            <FoodCategory></FoodCategory>
            <BestoBackground></BestoBackground>
            <PopularMenu></PopularMenu>
            <ChefRecommend></ChefRecommend>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;