import React from 'react';
import Contract from '../Contract/Contract';
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
                  <Contract></Contract>
            </div>
      );
};

export default Home;