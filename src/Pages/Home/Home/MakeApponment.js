import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import button from '../../../Common/PrivateButton';
import PrivateButton from '../../../Common/PrivateButton';

const MakeApponment = () => {
   return (
      <section className=''

         style={{
            background: `url(${appointment})`
         }}

      >

         <div className="hero  ">
            <div className="hero-content flex-col lg:flex-row">
               <img alt='' src={doctor} className="-mt-32 hidden md:block lg:w-1/2  " />
               <div>
                  <h1 className="text-3xl text-secondary font-bold">Appointment</h1>
                  <h1 className="text-4xl text-white font-bold">Make an appointment Today!</h1>
                  <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                  <PrivateButton>Get Started</PrivateButton>
               </div>
            </div>
         </div>

      </section>
   );
};

export default MakeApponment;