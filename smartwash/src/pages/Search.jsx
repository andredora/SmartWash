import React, { useState } from 'react';
import { usePlacesWidget } from 'react-google-autocomplete';
import ReservationPopup from '../components/ReservationPopup';
import StaticMap from '../components/StaticMap';


export default function Search() {
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
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <div style={{fontSize: '24px', marginBottom: '20px'}}><h1><b>Mapa do Transporte</b></h1>
      </div>
      <label style={{marginTop: '2px'}} className="input input-bordered input-info flex items-center gap-2">
        <input ref={originRef} type="text" className="grow" placeholder="Insira a Origem" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
      </label>
      <label style={{marginTop: '10px'}} className="input input-bordered input-info flex items-center gap-2">
        <input ref={destinationRef} type="text" className="grow" placeholder="Insira o destino" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
      </label>
     
      <StaticMap /> {/* Adicionando o componente StaticMap aqui */}

      <div style={{ marginTop: '10px' }}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleReserveTrip}>Reservar Viagem</button>
        {showReservationPopup && (
          <ReservationPopup onClose={() => setShowReservationPopup(false)} />
        )}
      </div>

      <div style={{ marginTop: '5px', marginBottom: '10px' }}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleTakeToAnyLaundry}>Levar à Lavandaria Disponível</button>
      </div>
    </div>
  );
}
