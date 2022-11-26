import React from 'react';
import Banner from './Banner';
import Infocards from './InfoCard/Infocards';
import MakeApponment from './MakeApponment';
import ServiceCards from './Services/ServiceCards';
import Testimonial from './Testimonial/Testimonial';
import Treatment from './Tetment/Treatment';

const Home = () => {
      return (
            <div className='p-8'>
                  <Banner></Banner>
                  <Infocards></Infocards>
                  <ServiceCards></ServiceCards>
                  <Treatment></Treatment>
                  <MakeApponment></MakeApponment>
                  <Testimonial></Testimonial>
            </div>
      );
};

export default Home;