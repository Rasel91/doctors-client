import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import PrivateButton from '../../../Common/PrivateButton';

const Contract = () => {
   return (
      <section className=''
         style={
            { background: `url(${appointment})` }
         }
      >
         <div className="hero text-center mt-24">
            <div className="hero-content flex-col ">
               <div className="text-center ">
                  <h1 className="text-2xl text-secondary font-bold">Contact Us</h1>
                  <p className=" text-white text-3xl">Stay connected with us</p>
               </div>
               <div className=" flex-shrink-0 w-full max-w-sm shadow-2xl ">
                  <div >
                     <div className="form-control ">
                      
                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                     </div>
                     <div className="form-control py-4">
                       
                        <input type="text" name='subject' placeholder="text" className="input input-bordered" />
                     </div>
                     <div className="form-control">
                        
                        <textarea className="textarea textarea-success" placeholder="write here"></textarea>
                     </div>
                     <div className="form-control mt-6">
                        <PrivateButton>Submit</PrivateButton>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </section>
   );
};

export default Contract;