import React from 'react';
import blogbanner from '../../../public/assets/blog/blogbanner.jpg'
import blog1 from '../../../public/assets/blog/blog1.jpg'
import blog2 from '../../../public/assets/blog/blog2.jpg'
import blog3 from '../../../public/assets/blog/blog3.jpg'
// import blog4 from '../../../public/assets/blog/blog4.jpg'
import blog5 from '../../../public/assets/blog/blog5.jpg'
import blog6 from '../../../public/assets/blog/blog6.jpg'
import burger1 from '../../../public/assets/blog/burger1.jpg'
import burger2 from '../../../public/assets/blog/burger2.jpg'
import burger3 from '../../../public/assets/blog/burger3.jpg'
import burger4 from '../../../public/assets/blog/burger4.jpg'
import drink1 from '../../../public/assets/blog/drink1.jpg'
import drink2 from '../../../public/assets/blog/drink2.jpg'
import drink3 from '../../../public/assets/blog/drink3.jpg'
import drink4 from '../../../public/assets/blog/drink4.jpg'
import pizza1 from '../../../public/assets/blog/pizza1.jpg'
import pizza2 from '../../../public/assets/blog/pizza2.jpg'
import pizza3 from '../../../public/assets/blog/pizza3.jpg'
import pizza4 from '../../../public/assets/blog/pizza4.jpg'
import dessert1 from '../../../public/assets/blog/dessert1.jpg'
import dessert2 from '../../../public/assets/blog/dessert2.jpg'
import dessert3 from '../../../public/assets/blog/dessert3.jpg'
import dessert4 from '../../../public/assets/blog/dessert4.jpg'
import chicken1 from '../../../public/assets/blog/chicken1.jpg'
import chicken2 from '../../../public/assets/blog/chicken2.jpg'
import chicken3 from '../../../public/assets/blog/chicken3.jpg'
import chicken4 from '../../../public/assets/blog/chicken4.jpg'




const Blog = () => {
    return (
       <>
        <div className="hero min-h-screen mb-10" style={{backgroundImage: `url("${blogbanner}")`}}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome Frosted</h1>
      <p className="mb-5"></p>
    </div>
  </div>
</div>

<div>
    <h2 className='text-4xl text-center  text-yellow-500'>Beef Item</h2>
<div className="carousel rounded-box mt-5">
  <div className="carousel-item mt-5">
    <img src={blog6} alt="Burger" style={{width:"320px"}} />
  </div> 
 <div className="carousel-item">
    <img src={blog1} alt="Burger"style={{width:"320px"}} />
  </div> 
  <div className="carousel-item">
    <img src={blog2} alt="Burger" style={{width:"320px"}} />
  </div> 
  <div className="carousel-item">
    <img src={blog3} alt="Burger" style={{width:"320px"}} />
  </div> 
  <div className="carousel-item">
    <img src={blog5} alt="Burger" style={{width:"320px"}} />
  </div> 
  <div className="carousel-item">
    <img src={blog6} alt="Burger" style={{width:"320px"}} />
  </div>
</div>
</div>
<div className='grid md:grid-cols-4 gap-48 mt-2'>
<div><h6 className='text-yellow-500'>Chicken Noodle Soup</h6></div>
<div><h6 className='text-yellow-500'>Lentil Soup</h6></div>
<div><h6 className='text-yellow-500'>Minestrone</h6></div>
<div><h6 className='text-yellow-500'>Italian Wedding Soup</h6></div>
</div>
<div>
    <h2 className='text-4xl text-center  text-yellow-500 mt-10'>Burger Item</h2>
<div className="carousel rounded-box mt-8">
  <div className="carousel-item">
    <img src={burger1} alt="Burger" style={{width:"320px"}} />
  </div> 
 <div className="carousel-item">
    <img src={burger2} alt="Burger"style={{width:"320px"}} />
  </div> 
  <div className="carousel-item">
    <img src={burger3} alt="Burger" style={{width:"320px"}} />
  </div> 
  <div className="carousel-item">
    <img src={burger4} alt="Burger" style={{width:"320px"}} />
  </div> 
  
  
</div>
</div>
<div className='grid md:grid-cols-4 gap-48'>
<div><h6 className='text-yellow-500'>Turkey burger</h6></div>
<div><h6 className='text-yellow-500'>Veggie burger</h6></div>
<div><h6 className='text-yellow-500'>Wild salmon burger</h6></div>
<div><h6 className='text-yellow-500'>Bean burger</h6></div>
</div>
<div>
    <h2 className='text-4xl text-center  text-yellow-500 mt-10'>Pizza Item</h2>
<div className="carousel rounded-box mt-8">
  <div className="carousel-item">
    <img src={drink1} alt="Burger" style={{width:"320px"}} />
  </div> 
 <div className="carousel-item">
    <img src={drink2} alt="Burger"style={{width:"320px"}} />
  </div> 
  <div className="carousel-item">
    <img src={drink3} alt="Burger" style={{width:"320px"}} />
  </div> 
  <div className="carousel-item">
    <img src={drink4} alt="Burger" style={{width:"320px"}} />
  </div> 
  </div>
</div>
<div className='grid md:grid-cols-4 gap-48'>
<div><h6 className='text-yellow-500'>Margarita</h6></div>
<div><h6 className='text-yellow-500'>Cosmopolitan</h6></div>
<div><h6 className='text-yellow-500'> Manhattan</h6></div>
<div><h6 className='text-yellow-500'>Old Fashioned</h6></div>
</div>
<div>
    <h2 className='text-4xl text-center  text-yellow-500 mt-10'>Drinks Item</h2>
<div className="carousel rounded-box mt-8">
  <div className="carousel-item">
    <img src={pizza1} alt="Burger" style={{width:"320px"}} />
  </div> 
 <div className="carousel-item">
    <img src={pizza2} alt="Burger"style={{width:"320px"}} />
  </div> 
  <div className="carousel-item">
    <img src={pizza3} alt="Burger" style={{width:"320px"}} />
  </div> 
  <div className="carousel-item">
    <img src={pizza4} alt="Burger" style={{width:"320px"}} />
  </div> 
  </div>
</div>
<div className='grid md:grid-cols-4 gap-48'>
<div><h6 className='text-yellow-500'>Pizza Margherita</h6></div>
<div><h6 className='text-yellow-500'>Tandoori Paneer Pizza</h6></div>
<div><h6 className='text-yellow-500'>Thin Crust Hawaiian Pizza</h6></div>
<div><h6 className='text-yellow-500'>Uttapam Pizza</h6></div>
</div>
<div>
    <h2 className='text-4xl text-center  text-yellow-500 mt-10'>Dessert Item</h2>
<div className="carousel rounded-box mt-8">
  <div className="carousel-item">
    <img src={dessert1} alt="Burger" style={{width:"320px"}} />
  </div> 
 <div className="carousel-item">
    <img src={dessert2} alt="Burger"style={{width:"320px"}} />
  </div> 
  <div className="carousel-item">
    <img src={dessert3} alt="Burger" style={{width:"320px"}} />
  </div> 
  <div className="carousel-item">
    <img src={dessert4} alt="Burger" style={{width:"320px"}} />
  </div> 
  </div>
</div>
<div className='grid md:grid-cols-4 gap-48'>
<div><h6 className='text-yellow-500'>Cakes</h6></div>
<div><h6 className='text-yellow-500'>Deep-fried</h6></div>
<div><h6 className='text-yellow-500'>Custards and Puddings</h6></div>
<div><h6 className='text-yellow-500'>Chocolate confections</h6></div>
</div>
<div>
    <h2 className='text-4xl text-center  text-yellow-500 mt-10'>Beef Item</h2>
<div className="carousel rounded-box mt-8">
  <div className="carousel-item">
    <img src={chicken1} alt="Burger" style={{width:"320px"}} />
  </div> 
 <div className="carousel-item">
    <img src={chicken2} alt="Burger"style={{width:"320px"}} />
  </div> 
  <div className="carousel-item">
    <img src={chicken3} alt="Burger" style={{width:"320px"}} />
  </div> 
  <div className="carousel-item">
    <img src={chicken4} alt="Burger" style={{width:"320px"}} />
  </div> 
  </div>
</div>
<div className='grid md:grid-cols-4 gap-48'>
<div><h6 className='text-yellow-500'>Indonesian meatball</h6></div>
<div><h6 className='text-yellow-500'>Filipino beef stew</h6></div>
<div><h6 className='text-yellow-500'>A trademark Sylheti</h6></div>
<div><h6 className='text-yellow-500'>Beef Hatkora</h6></div>
</div>
       </>
    );
};

export default Blog;