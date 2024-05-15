import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import TransportSearch from '../components/TransportSearch';
import TransportCards from '../components/TransportCards';

export default function EscolhaTransporte() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleOptionChange = (index) => {
    setSelectedOption(index);
  };

  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  const handleNextClick = () => {
    if (searchText.trim() === '') { // Corrigido aqui
      setErrorMessage('Please enter a Pickup Spot!');
      return;
    }

    if (selectedOption === null) {
      setErrorMessage('Please select at least one Transport option!');
      return;
    }

    // Se a pesquisa não estiver vazia e uma opção de transporte estiver selecionada, então navegue para /laundriestransport
    if (searchText.trim() !== '' && selectedOption !== null) {
      setErrorMessage('');
      navigate('/laundriestransport');
    }
  };

  return (
    <div className="flex flex-col justify-center gap-2 pb-16 mx-auto">
      <Link to="/home">
        <button className="btn btn-outline rounded-full" style={{ marginBottom: '-40px' }}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </Link>
      <div className={"pt-12 pb-6"}>
      <TransportSearch onSearchChange={setSearchText} />
      </div>
      <TransportCards onSelect={handleOptionChange} />
      <div className={'text-center '}>
      {errorMessage && (
          <div className={"text-red-500 text-center pb-3"}>{errorMessage}</div>
        )}
        <button 
          className="btn btn-primary" 
          onClick={handleNextClick}>
          Select Laundry
        </button>
        
       
      </div>
    </div>
  );
}
