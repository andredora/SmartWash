import React from 'react';

const StaticMap = () => {
  return (
    <div style={{ width: '100%', height: '600px', overflow: 'auto' }}>
      <img src='src/assets/MapaAveiro.png' // Alterar o caminho da imagem para 'src/assets/MapaAv
        alt="Mapa Estático"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default StaticMap;
