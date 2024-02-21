import React from 'react';
import footer1 from '../../../../public/assets/footer/card1.png'
import footer2 from '../../../../public/assets/footer/card2.jpg'
import footer3 from '../../../../public/assets/footer/card3.png'
import footer4 from '../../../../public/assets/footer/card4.jpg'
import footer5 from '../../../../public/assets/footer/card5.jpg'
import footer6 from '../../../../public/assets/footer/card6.jpg'
import playstore from '../../../../public/assets/footer/playstore.png'


const Footer = () => {
    return (
        <>
<footer className="footer p-10 bg-slate-900 text-neutral-content mt-10 h-[350px] grid lg:grid-cols-5 md:grid-cols-2 gap-20">
 
 <div>
 <h1 className='uppercase text-4xl text-green-600 font-bold'>FoodKing</h1>
 <p>We believe it has the power to do
  amazing things.<br></br><br></br><br></br>

Interested in working with us?</p>
<h3 className='font-bold text-green-600 italic text-2xl'>info@example.com</h3>
 </div>
 <div>
  <h2 className='text-2xl text-green-600'>Quick Links</h2>
  <p>Services</p>
  <p>About Company</p>
  <p>Latest News</p>
  <p>Team Member</p>
  <p>Testimonials</p>
 </div>
 <div>
  <h1 className='text-2xl text-green-600'>My Account</h1>
  <p>My Profile</p>
  <p>My Order History</p>
  <p>My Wish List</p>
  <p>Order Tracking</p>
  <p>Shopping Cart</p>
 </div>
 <div>
  <h1 className='text-2xl text-green-600'>Address:</h1>
  <p>570 8th Ave,<br></br> New York,NY 10018 United<br></br> States</p>
  <h1 className='text-2xl text-green-600'>Hours</h1>
  <p>9.30am – 6.30pm<br></br>
    Monday To Friday</p>
 </div>
 <div>
  <h1 className='text-2xl text-green-600'>Install App</h1>
  <p className='text-orange-100'>FROM APP STORE OR GOOGLE PLAY</p>
  <img src={playstore} alt="" />
 </div>
</footer>
{/* After Footer Section */}
<div className="p-12 bg-green-600 text-white h-28">
 
 <p>Copyright © 2024 - MD MASHUM HOSSAIN</p>
 <div className='flex justify-end -mt-10 gap-2'>
  <div><img src={footer1} alt="" style={{width:"90px"}} /></div>
  <div><img src={footer2} alt=""  style={{width:"80px"}} /></div>
  <div><img src={footer3} alt=""  style={{width:"80px"}} /></div>
  <div><img src={footer4} alt=""  style={{width:"80px"}} /></div>
  <div><img src={footer5} alt=""  style={{width:"80px"}} /></div>
  <div><img src={footer6} alt=""  style={{width:"80px"}} /></div>
 </div>
</div>
        </>
    );
};

export default Footer;