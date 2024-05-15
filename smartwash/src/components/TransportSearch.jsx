import React, { useState } from 'react';

const TransportSearch = ({ onSearchChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAutocomplete, setShowAutocomplete] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value.trim() !== "" && 'DETI'.toLowerCase().includes(value.toLowerCase())) {
      setShowAutocomplete(true);
    } else {
      setShowAutocomplete(false);
    }
    // Passa o termo de pesquisa atualizado para o componente pai
    onSearchChange(value);
  };

  const handleAutocompleteClick = () => {
    setSearchTerm('DETI - Departamento de Eletrónica, Telecomunicações e Informática');
    setShowAutocomplete(false); // Close o autocomplete após clicar em uma opção
    // Passa o termo de pesquisa atualizado para o componente pai
    onSearchChange('DETI - Departamento de Eletrónica, Telecomunicações e Informática');
  };

  return (
    <div style={{ marginBottom: '-30px', marginTop: '-30px'}}>
      <label className="input input-bordered input-info flex items-center gap-2">
        <input 
          type="text" 
          className="grow" 
          placeholder="Enter Pickup Location" 
          value={searchTerm}
          onChange={handleInputChange}
        />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
          <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
        </svg>
      </label>
      {showAutocomplete && (
        <div onClick={handleAutocompleteClick}>
          DETI - Departamento de Eletrónica, Telecomunicações e Informática
        </div>
      )}
    </div>
  );
};

export default TransportSearch;
