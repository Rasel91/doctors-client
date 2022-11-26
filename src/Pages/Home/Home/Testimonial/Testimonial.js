import React from 'react';
import quote from '../../../../assets/icons/quote.svg'
import people1 from '../../../../assets/images/people1.png'
import people2 from '../../../../assets/images/people2.png'
import people3 from '../../../../assets/images/people3.png'
import TestiCard from './TestiCard';

const Testimonial = () => {
   const testData = [
      {
         id: 1,
         icon: people1,
         name: 'Winson Herry',
         country: 'California',
         description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',

      },
      {
         id: 1,
         icon: people1,
         name: 'Winson Herry',
         country: 'California',
         description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',

      },
      {
         id: 1,
         icon: people1,
         name: 'Winson Herry',
         country: 'California',
         description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',

      }
   ]

   return (
      <section className='mt-10 '>
         <div className='flex flex-col lg:flex-row justify-between'>
            <div className='ml-4'>
               <h1 className='text-3xl text-secondary'>Testimonial</h1>
               <h2 className='text-4xl '>What Our Patients Says</h2>
            </div>
            <div>
               <img className='h-2/5' src={quote} alt="" />
            </div>
         </div>

         <div className='grid gap-4 md:grid-cols-3 grid-cols-3 lg:grid-cols-3'>
            {
               testData.map(testdata=><TestiCard key={testdata.id}

                  testdata={testdata}
               >


               </TestiCard>)
            }
         </div>
      </section>
   );
};

export default Testimonial;