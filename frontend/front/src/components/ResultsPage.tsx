import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MapComponent from "./Map";

export function ResultsPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialZipCode = searchParams.get("zip") || ""; // Retrieve the zip code from the query parameter
  const [enteredZipCode, setEnteredZipCode] = useState("");
  const [zipCode, setZipCode] = useState(initialZipCode);

  const handleZipCodeSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setZipCode(enteredZipCode);
    setEnteredZipCode("");
  };

  useEffect(() => {
    setZipCode(initialZipCode);
  }, [initialZipCode]);


  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
      <MapComponent zipCode={zipCode} />
      <div style={ {marginTop: "20px"} }>
        <form onSubmit={handleZipCodeSubmit}>
          <input
            type="text"
            value={enteredZipCode}
            onChange={(event) => setEnteredZipCode(event.target.value)}
            placeholder="Enter a zip code"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
