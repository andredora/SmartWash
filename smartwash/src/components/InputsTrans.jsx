import React, { useState } from 'react';

const InputsTrans = () => {
  const [origem, setOrigem] = useState('DETI - Departamento de Eletrónica Tecnologia e Informática');
  const [destino, setDestino] = useState('A Lavandeira');

  return (
    <div style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}> {/* Define largura máxima e centraliza horizontalmente */}
      <div style={{ marginTop: '2px', marginInline:'100px' }} className="input input-bordered input-info flex items-center gap-2">
        <div className="grow">{origem}</div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
          <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
        </svg>
      </div>
      <div style={{ marginTop: '10px', marginInline:'100px' }} className="input input-bordered input-info flex items-center gap-2">
        <div className="grow">{destino}</div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
          <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
};

export default InputsTrans;
