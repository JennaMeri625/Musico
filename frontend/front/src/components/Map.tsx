
import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "70%",
  height: "calc(50vh - 10px)",
  margin: "0 auto", // Center horizontally
};

const initialCenter = {
  lat: 42.3314,
  lng: -83.0458,
};

function MapComponent({ zipCode }: { zipCode: string }) {
  const [center, setCenter] = useState(initialCenter);
  const [markerPosition, setMarkerPosition] = useState(initialCenter);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
  });

  useEffect(() => {
    if (isLoaded && zipCode) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: zipCode }, (results, status) => {
        if (status === window.google.maps.GeocoderStatus.OK && results && results.length > 0) {
          const location = results[0].geometry.location;
          const latLng = { lat: location.lat(), lng: location.lng() };
          setCenter(latLng);
          setMarkerPosition(latLng);
          console.log("New Center:", latLng);
          console.log("New Marker Position:", latLng);
        } else {
          console.error("Geocode was not successful for the following reason:", status);
        }
      });
    }
  }, [isLoaded, zipCode]);

  const handleMapLoad = (map: google.maps.Map) => {
    // Handle map load event if needed
  };

  if (loadError) {
    return <div>Error loading Google Maps</div>;
  }

  return isLoaded ? (
    <div style={containerStyle}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} onLoad={handleMapLoad}>
        <Marker position={markerPosition} />
      </GoogleMap>
    </div>
  ) : (
    <div>Loading Google Maps...</div>
  );
}

export default MapComponent;
