import React, { useState } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '50%',
  height: '300px'
};

const initialCenter = {
  lat: 42.3314,
  lng: -83.0458
};

const initialMarkerPosition = {
  lat: 42.3314,
  lng: -83.0458
};

function MapComponent() {
  const [center, setCenter] = useState(initialCenter);
  const [markerPosition, setMarkerPosition] = useState(initialMarkerPosition);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string
  });

  
  const handleMapLoad = (map: google.maps.Map) => {
  };
  
  

  if (loadError) {
    return <div>Error loading Google Maps</div>;
  }

  return isLoaded ? (
    <div style={containerStyle}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={handleMapLoad}
      >
        <Marker position={markerPosition} />
      </GoogleMap>
    </div>
  ) : (
    <div>Loading Google Maps...</div>
  );
}

export default MapComponent;
