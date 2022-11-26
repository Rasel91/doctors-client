import React from 'react';

const TestiCard = ({ testdata }) => {
   const { name, icon, country, description } = testdata;

   return (
      <div className="card shadow-xl text-black  text-neutral-content">
         <div className="card-body  ">
            
            <p>{description}</p>
            <div className="card-actions flex justify-start items-center">
              <div>
              <img src={icon} alt="" />
              </div>
               
             <div >
               <h1>{name}</h1>
               <h1>{country}</h1>

             </div>
              
            </div>
         </div>
      </div>
   );
};

export default TestiCard;