import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../../public/assets/menu/cover2.jpg'
import dessertImg from '../../../../public/assets/menu/menucategory2.jpg'
import pizzaImg from '../../../../public/assets/menu/pizza3.jpg'
import saladImg from '../../../../public/assets/menu/salad.jpg'
import soupImg from '../../../../public/assets/menu/soup.jpg'
import drinkImg from '../../../../public/assets/menu/drink.jpg'
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
    const[menu] =useMenu();
    const dessert = menu.filter(item => item.category ==='dessert');
    const soup = menu.filter(item => item.category ==='soup');
    const salad = menu.filter(item => item.category ==='salad');
    const pizza = menu.filter(item => item.category ==='pizza');
    const offered =menu.filter(item =>item.category ==='offered')
    const drink = menu.filter(item =>item.category ==='drinks')
    return (
        <div>
            <Helmet>
                <title>Frosted Grill|Menu</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Cover img={menuImg} title={"our menu"}></Cover>
            {/* main cover */}
            <SectionTitle
            subHeading={"Don't Miss"}
            heading={"TODAY'S OFFER"}
            >
            </SectionTitle>
            {/* offered menu item */}
            <MenuCategory items={offered}></MenuCategory>
           {/* Dessert menu item */}
            <MenuCategory
            items={dessert}
            img={dessertImg}
            title={'Dessert'}
            >
        </MenuCategory>
        {/* Pizza menu item */}
        <MenuCategory items={pizza} title={"Pizza"} img={pizzaImg}></MenuCategory>
        {/* salad menu item */}
        <MenuCategory items={salad} title={'salad'} img={saladImg}></MenuCategory>
        <MenuCategory items={soup} title={'soup'} img={soupImg}></MenuCategory>
        <MenuCategory items={drink} title={'drink'} img={drinkImg}></MenuCategory>
       </div>
    );
};

export default Menu;