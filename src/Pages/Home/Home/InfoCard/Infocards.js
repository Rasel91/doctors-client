
import React from 'react';
import clock from '../../../../assets/icons/clock.svg';
import marker from '../../../../assets/icons/marker.svg';
import phone from '../../../../assets/icons/phone.svg';
import Infocard from './Infocard';


const Infocards = () => {

  const cartData = [
   {
      id: 1,
      name:'Opening Hours',
      description:'Open at 9.00 am to 5.00 pam',
      icon:clock ,
      bgClass: 'bg-gradient-to-r from-primary to-secondary'

   },
   {
      id: 2,
      name:'Opening Hours',
      description:'Open at 9.00 am to 5.00 pam',
      icon:marker ,
      bgClass: 'bg-accent'

   },
   {
      id: 3,
      name:'Opening Hours',
      description:'Open at 9.00 am to 5.00 pam',
      icon:phone ,
      bgClass: 'bg-gradient-to-r from-primary to-secondary'

   },
  ]


   return (
      <div className='grid mt-28 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
         {
            cartData.map(cart=><Infocard
            key={cart.id}
            cart={cart}
            ></Infocard>)
         }
      </div>
   );
};

export default Infocards;