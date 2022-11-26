import React from 'react';

import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/appointment.png'


const Banner = () => {
   return (
      <div className="hero  ">
         <div className="hero-content flex-col lg:flex-row-reverse">
            <img alt='' src={chair}className="w-1/2 rounded-lg shadow-2xl" />
            <div className=''>
               <h1 className="text-4xl font-bold">Your New Smile Starts Here</h1>
               <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
               <button className="btn btn-primary">Get Started</button>
            </div>
         </div>
      </div>
   );
};

export default Banner;