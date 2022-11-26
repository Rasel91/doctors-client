import React from 'react';

const ServiceCard = ({ service }) => {

   const { name, description, icon,  } = service;

   return (
      <div className="card  bg-base-100 shadow-xl p-4">
         <figure>
            <img src={icon}alt="Shoes" />
         </figure>
         <div className="card-body items-center text-center  ">
            <h2 className="card-title ">{name}</h2>
            <p>{description}</p>
          
         </div>
      </div>
   );
};

export default ServiceCard;