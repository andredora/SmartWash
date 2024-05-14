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
    if (selectedOption === 1 || selectedOption === 0) {
      navigate('/LaundriesTransport');
    } else {
      alert("O segundo card não está selecionado.");
    }
  };

  return (
    <div className="flex flex-col justify-center gap-12 pb-8 mx-auto">
      <Link to="/home">
        <button className="btn btn-outline rounded-full" style={{ marginBottom: '-40px' }}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </Link>
      <TransportSearch />
      <TransportCards onSelect={handleOptionChange} />
      <div style={{ marginTop: '-30px', marginBottom: '30px', marginLeft: 'auto',marginRight:'auto' }}>
             <button className="btn btn-primary" onClick={handleNextClick}>Select Date and Time</button>
      </div>
    </div>
  );
}
