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
    apiKey: 'YOUR_API_KEY',
    onPlaceSelected: (place) => {
      setOrigin({ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() });
    },
  });
  const { ref: destinationRef } = usePlacesWidget({
    apiKey: 'YOUR_API_KEY',
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
      <input ref={originRef} placeholder="Insira a origem" />
      <input ref={destinationRef} placeholder="Insira o destino" />
      <LoadScript googleMapsApiKey="YOUR_API_KEY" libraries={libraries}>
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
