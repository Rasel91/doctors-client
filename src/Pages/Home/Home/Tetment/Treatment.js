import React from 'react';
import treatment from '../../../../assets/images/treatment.png'
import PrivateButton from '../../../../Common/PrivateButton';


const Treatment = () => {

   return (
      <div className="card lg:card-side bg-base-100 shadow-xl my-36 p-8">
         <figure className=''>
            <img className='lg:w-1/2 sm:rounded-sm md:rounded-md lg:rounded-lg' src={treatment} alt="Album" />
         </figure>
         <div className="card-body lg:w-1/2">
            <h2 className="card-title">Exceptional Dental Care, on Your Terms</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <div className="card-actions justify-start">
               <PrivateButton>Treatment Info </PrivateButton>
            </div>
         </div>
      </div>
   );
};

export default Treatment;