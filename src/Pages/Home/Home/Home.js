import React from 'react';
import Banner from './Banner';
import Infocard from './InfoCard/Infocard';
import Infocards from './InfoCard/Infocards';
import ServiceCards from './Services/ServiceCards';

const Home = () => {
      return (
            <div className='p-8'>
                 <Banner></Banner>
                 <Infocards></Infocards>
                 <ServiceCards></ServiceCards>
            </div>
      );
};

export default Home;