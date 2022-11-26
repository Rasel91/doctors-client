import React from 'react';

const TestiCard = ({ testdata }) => {
   const { name, icon, country, description } = testdata;

   return (
      <div className="card shadow-xl text-accent text-neutral-content">
         <div className="card-body items-center text-center">
            
            <p>{description}</p>
            <div className="card-actions justify-end flex justify-between">
              <div>
              <img src={icon} alt="" />
              </div>
               
             <div>
             <button className="btn btn-ghost">{name}</button>
               <button className="btn btn-ghost">{country}</button>
             </div>
              
            </div>
         </div>
      </div>
   );
};

export default TestiCard;