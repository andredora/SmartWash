import React, { useState } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import { usePlacesWidget } from 'react-google-autocomplete'; // Importando hook do react-google-autocomplete

const containerStyle = {
  width: '800px',
  height: '600px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const libraries = ['places'];

export default function Search() {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [directions, setDirections] = useState(null);
  const { ref: originRef } = usePlacesWidget({
    apiKey: 'AIzaSyBJWUohNY4QYlZMP2tx0zCb1ZrGjb83RA0',
    onPlaceSelected: (place) => {
      setOrigin({ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() });
    },
  });
  const { ref: destinationRef } = usePlacesWidget({
    apiKey: 'AIzaSyBJWUohNY4QYlZMP2tx0zCb1ZrGjb83RA0',
    onPlaceSelected: (place) => {
      setDestination({ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() });
    },
  });

  const onDirectionsLoad = (directions) => {
    setDirections(directions);
  };

  return (
    <div>
      <h1><b>Mapa do Transporte</b></h1>
      <label className="input input-bordered input-info flex items-center gap-2">
            <input ref={originRef} type="text" className="grow" placeholder="Insira a Origem" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
      </label>
      <label className="input input-bordered input-info flex items-center gap-2">
            <input ref={destinationRef} type="text" className="grow" placeholder="Insira o destino" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
      </label>      
      <LoadScript googleMapsApiKey="AIzaSyBJWUohNY4QYlZMP2tx0zCb1ZrGjb83RA0" libraries={libraries}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {origin && destination && (
            <DirectionsService
              options={{
                destination,
                origin,
                travelMode: 'DRIVING',
              }}
              callback={onDirectionsLoad}
            />
          )}
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </LoadScript>
    </div>
);
}
