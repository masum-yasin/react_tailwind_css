import React from 'react';
import cheifrecommend1 from '../../../../public/assets/home/chief1.jpg'
import cheifrecommend2 from '../../../../public/assets/home/chief4.jpg'
import cheifrecommend3 from '../../../../public/assets/home/chief3.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const ChefRecommend = () => {
    return (
       <section>
         <SectionTitle
         subHeading={'shoud Try'}
         heading={"CHEF RECOMMANDS"}
         
         ></SectionTitle>
         <div className='md:flex gap-10'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={cheifrecommend1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Murg Malaiwala</h2>
    <p>material consisting essentially of protein, carbohydrate, and fat used in the body of an organism to sustain growth, repair, and vital processes and to furnish energy</p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={cheifrecommend2}alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Kerala Chicken Roast</h2>
    <p>material consisting essentially of protein, carbohydrate, and fat used in the body of an organism to sustain growth, repair, and vital processes and to furnish energy</p>
    <div className="card-actions justify-end">
    
    </div>
  </div>
</div>
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={cheifrecommend3} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Masaledar Chicken Lollipop</h2>
    <p>material consisting essentially of protein, carbohydrate, and fat used in the body of an organism to sustain growth, repair, and vital processes and to furnish energy</p>
    <div className="card-actions justify-end">
    
    </div>
  </div>
</div>

 </div>
       </section>
    );
};

export default ChefRecommend;