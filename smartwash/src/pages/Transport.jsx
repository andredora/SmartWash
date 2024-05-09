import React, { useState } from 'react';
import { usePlacesWidget } from 'react-google-autocomplete';
import ReservationPopup from '../components/ReservationPopup';
import StaticMap from '../components/StaticMap';
import ReservationContainer from '../components/ReservationContainer'; // Importe o ReservationContainer
import { Link } from 'react-router-dom'; // Importe o Link
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import InputsTrans from '../components/InputsTrans';


export default function Transport() {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [directions, setDirections] = useState(null);
  const [showReservationPopup, setShowReservationPopup] = useState(false);
  const { ref: originRef } = usePlacesWidget({
    onPlaceSelected: (place) => {
      setOrigin({ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() });
    },
  });
  const { ref: destinationRef } = usePlacesWidget({
    onPlaceSelected: (place) => {
      setDestination({ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() });
    },
  });

  const onDirectionsLoad = (directions) => {
    setDirections(directions);
  };

  const handleReserveTrip = () => {
    setShowReservationPopup(true); // Mostrar o popup quando clicar em reservar viagem
  };

  const handleTakeToAnyLaundry = () => {
    // Add logic to take clothes to any available laundry
    console.log('Taking clothes to any available laundry...');
  };

  return (
    <div>
      <Link to="/home"> {/* Use o Link para navegar para a página "Home" */}
        <button className="btn btn-outline">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </Link>
      <div className="pb-12" style={{ textAlign: 'center', marginTop: '20px' }}>
        <div style={{ fontSize: '24px', marginBottom: '10px' }}><h1><b>Mapa do Transporte</b></h1>
        </div>
        < InputsTrans originRef={originRef} destinationRef={destinationRef} onDirectionsLoad={onDirectionsLoad} /> {/* Adicione o componente InputsTrans aqui */}

        <StaticMap /> {/* Adicionando o componente StaticMap aqui */}
        <ReservationContainer showReservationPopup={showReservationPopup} onClose={() => setShowReservationPopup(false)} /> {/* Adicione o ReservationContainer aqui */}

        <div style={{ marginTop: '10px' }}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleReserveTrip}>Reservar Viagem</button>
        </div>

        <div style={{ marginTop: '5px', marginBottom: '10px' }}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleTakeToAnyLaundry}>Levar Roupa à Lavandaria Disponível</button>
        </div>
      </div>
    </div>
  );
}

