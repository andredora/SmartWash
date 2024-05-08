import React from 'react';
import MapaAveiro from '../assets/MapaAveiro2.png';


const StaticMap = () => {
  return (
    <div style={{ width: '100%', height: '500px', overflow: 'auto', marginTop: '15px' }}>
        <img src={MapaAveiro} alt="Mapa de Aveiro" 
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default StaticMap;
