import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import TransportSearch from '../components/TransportSearch';
import TransportCards from '../components/TransportCards';

export default function EscolhaTransporte() {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleOptionChange = (index) => {
    setSelectedOption(index);
  };

  const handleNextClick = () => {
    if (selectedOption === 1) {
      navigate('/LaundriesTransport');
    } else {
      console.log("O segundo card não está selecionado.");
    }
  };

  return (
    <div className="flex flex-col justify-center gap-12 pb-8 mx-auto">
      <Link to="/home">
        <button className="btn btn-outline rounded-full" style={{ marginBottom: '-40px' }}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </Link>
      <div style={{ fontSize: '21px', marginBottom: '0px', marginLeft: '55px', marginTop: '-30px' }}>
        <h1><b>Choose the Type of Transport</b></h1>
      </div>
      <TransportSearch />
      <TransportCards onSelect={handleOptionChange} />
      <div style={{ marginTop: '-30px', marginBottom: '30px', marginLeft: 'auto',marginRight:'auto' }}>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleNextClick} style={{ width: '120px', height: '70px', fontSize: '24px' }} // Ajuste para aumentar o tamanho do botão

        >
          Next
        </button>
      </div>
    </div>
  );
}
