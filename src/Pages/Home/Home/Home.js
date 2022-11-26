import React from 'react';
import Banner from './Banner';
import Infocards from './InfoCard/Infocards';
import ServiceCards from './Services/ServiceCards';
import Treatment from './Tetment/Treatment';

const Home = () => {
      return (
            <div className='p-8'>
                  <Banner></Banner>
                  <Infocards></Infocards>
                  <ServiceCards></ServiceCards>
                  <Treatment></Treatment>
            </div>
      );
};

export default Home;