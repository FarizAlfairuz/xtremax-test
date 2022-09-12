import React, { useEffect } from "react";
import GoogleMap from "google-map-react";
import CustomMarker from "./CustomMarker";

const GoogleMapView = () => {
  const center = [1.28692, 103.85457];
  useEffect(() => {
    fetch()
  }, [])

  return (
    <section className="absolute left-0 w-screen h-screen">
      <GoogleMap
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={center}
        defaultZoom={15}
      >
        <CustomMarker lat={1.28692} lng={103.85457} />
      </GoogleMap>
    </section>
  );
};

export default GoogleMapView;
