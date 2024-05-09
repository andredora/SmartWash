import React, { useState } from 'react';

const InputsTrans = () => {
  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');

  // Função para atualizar a origem
  const handleOrigemChange = (e) => {
    setOrigem(e.target.value);
  };

  // Função para atualizar o destino
  const handleDestinoChange = (e) => {
    setDestino(e.target.value);
  };

  return (
    <>
      <label style={{ marginTop: '2px' }} className="input input-bordered input-info flex items-center gap-2">
        <input
          type="text"
          className="grow"
          placeholder="Insira a Origem"
          value={origem}
          onChange={handleOrigemChange}
        />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
          <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
        </svg>
      </label>
      <label style={{ marginTop: '10px' }} className="input input-bordered input-info flex items-center gap-2">
        <input
          type="text"
          className="grow"
          placeholder="Insira o destino"
          value={destino}
          onChange={handleDestinoChange}
        />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
          <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
        </svg>
      </label>
    </>
  );
};

export default InputsTrans;
