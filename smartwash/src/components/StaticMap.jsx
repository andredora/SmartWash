import React from 'react';

const StaticMap = () => {
  return (
    <div style={{ width: '100%', height: '500px', overflow: 'auto', marginTop: '15px' }}>
      <img src='src/assets/MapaAveiro2.png' // Alterar o caminho da imagem para 'src/assets/MapaAv
        alt="Mapa Estático"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default StaticMap;
