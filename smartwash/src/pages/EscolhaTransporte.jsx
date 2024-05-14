import React from 'react';
import TransportSearch from '../components/TransportSearch';
import TransportCards from '../components/TransportCards';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function EscolhaTransporte() {
  return (
    
    <div className="flex flex-col justify-center gap-12 pb-8 mx-auto">

    <Link to="/home">
                    <button className="btn btn-outline rounded-full" style={{marginBottom: '-40px'}}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
    </Link>
    <div style={{ fontSize: '21px', marginBottom: '0px', marginLeft: '55px', marginTop: '-30px'}}><h1><b>Escolha o Tipo de Transporte</b></h1></div>

    <TransportSearch/>
      <TransportCards />
  
    </div>
  );
}
