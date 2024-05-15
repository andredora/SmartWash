import React, { useState } from 'react';

const InputsTrans = () => {
  const [origem, setOrigem] = useState('A Lavandeira');
  const [destino, setDestino] = useState('DETI - Departamento de Ele...');

  return (
    <div style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}>
      <div style={{ marginTop: '2px', marginInline: '50px' }} className="input input-bordered input-info flex items-center gap-2">
        <div style={{ fontWeight: 'bold' }}>From:</div>
        <div className="grow">{origem}</div>
      </div>
      <div style={{ marginTop: '10px', marginInline: '50px' }} className="input input-bordered input-info flex items-center gap-2">
        <div style={{ fontWeight: 'bold' }}>To:</div>
        <div className="grow">{destino}</div>
      </div>
    </div>
  );
};

export default InputsTrans;
