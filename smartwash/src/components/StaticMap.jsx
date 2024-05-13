import React from 'react';
import Uber from '../assets/Uber.jpg';


const StaticMap = () => {
  return (
    <div style={{ width: '100%', height: '500px', overflow: 'auto', marginTop: '15px' }}>
        <img src={Uber} alt="Mapa da viagem" 
        style={{ width: 'auto', height: '100%', display: 'block', margin: '0 auto'}}
      />
    </div>
  );
};

export default StaticMap;
