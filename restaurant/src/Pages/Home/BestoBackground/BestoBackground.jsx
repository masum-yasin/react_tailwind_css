import React from 'react';
import BestoBackgroundimg from '../../../../public/assets/home/chef-service.jpg'

const BestoBackground = () => {
    return (
        <div className="bg-cover bg-center h-[300px] w-[800px] mx-auto flex justify-center items-center" style={{backgroundImage: `url(${ BestoBackgroundimg})`}}>
       <div className='text-center  bg-white w-[550px] ml-28'> 
        <h3 className='text-center'>Frosted Flame Grill</h3>
        <p>n the United States, the use of the word grill refers to cooking food<br></br> directly over a source of dry heat, typically with the food sitting<br></br> on a metal grate that leaves "grill marks.Grilling is usually done outdoors on<br></br> charcoal grills or gas grills; a recent trend is the concept of infrared grilling.</p>
       </div>
      </div>
    );
};

export default BestoBackground;