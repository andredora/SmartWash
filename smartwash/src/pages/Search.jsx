import React, { useState } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-autocomplete';

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

  const onOriginSelect = async (address) => {
    try {
      const results = await geocodeByAddress(address);
      const latLng = await getLatLng(results[0]);
      setOrigin(latLng);
    } catch (error) {
      console.error('Error selecting origin:', error);
    }
  };

  const onDestinationSelect = async (address) => {
    try {
      const results = await geocodeByAddress(address);
      const latLng = await getLatLng(results[0]);
      setDestination(latLng);
    } catch (error) {
      console.error('Error selecting destination:', error);
    }
  };

  const onDirectionsLoad = (directions) => {
    setDirections(directions);
  };

  return (
    <div>
      <h1>Uber Map</h1>
      <PlacesAutocomplete
        onLoadFailed={(error) => console.error('Autocomplete load failed:', error)}
        onChange={(value) => console.log('Change:', value)}
        onSelect={onOriginSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input {...getInputProps({ placeholder: 'Enter origin' })} />
            <div>
              {loading ? <div>Loading...</div> : null}
              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? '#41b6e6' : '#fff',
                };
                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <PlacesAutocomplete
        onLoadFailed={(error) => console.error('Autocomplete load failed:', error)}
        onChange={(value) => console.log('Change:', value)}
        onSelect={onDestinationSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input {...getInputProps({ placeholder: 'Enter destination' })} />
            <div>
              {loading ? <div>Loading...</div> : null}
              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? '#41b6e6' : '#fff',
                };
                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
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
