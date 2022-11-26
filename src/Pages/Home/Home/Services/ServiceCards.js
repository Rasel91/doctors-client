import React from 'react';

import fluoride from '../../../../assets/images/fluoride.png';
import cavity from '../../../../assets/images/cavity.png';
import whitening from '../../../../assets/images/whitening.png';
import ServiceCard from './ServiceCard';

const ServiceCards = () => {

   const serviceData = [
      {
         id: 1,
         name: 'Fluoride Treatment',
         description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
         icon: fluoride,
         bgClass: 'bg-primary'
      },
      {
         id: 1,
         name: 'Fluoride Treatment',
         description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
         icon: cavity,
         bgClass: 'bg-primary'
      },
      {
         id: 1,
         name: 'Fluoride Treatment',
         description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
         icon: whitening,
         bgClass: 'bg-primary'
      },
   ]

   return (
      <div className='mt-16'>
         <div className='text-center mb-20'>
          <h3 className='text-secondary font-bold text-3xl'>OUR SERVICES</h3>
          <h2 className='text-4xl'>Services We Provide</h2>
         </div>
         <div className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 '>
            {
               serviceData.map(service => <ServiceCard
                  key={service.id}
                  service={service}
               ></ServiceCard>)}
         </div>
      </div>
   );
};

export default ServiceCards;