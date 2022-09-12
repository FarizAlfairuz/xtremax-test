import React, { useCallback, useEffect, useState } from "react";
import GoogleMap from "google-map-react";
import CustomMarker from "./CustomMarker";
import { useSelectedContext } from "../../context/SelectedContext";

const GoogleMapView = () => {
  const [mapData, setMapData] = useState([]);
  const [center, setCenter] = useState([1.28692, 103.85457]);
  const { selectedMenu, selected, setSelected } = useSelectedContext();

  // fetching the data from my github to simulate fetching data from real API
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/FarizAlfairuz/xtremax-test/master/data/mapData.json"
    )
      .then((res) => res.json())
      .then((data) => setMapData(data));
  }, []);

  // to match the selected menu and the data from JSON
  useEffect(() => {
    if (selectedMenu !== null) {
      const selectedData = mapData.filter((map) =>
        map.place_name.includes(selectedMenu)
      );
      setSelected(selectedData[0]);
    }
  }, [selectedMenu, mapData, setSelected]);

  // set the center when one of the marks selected
  useEffect(() => {
    if (selected) {
      setCenter([selected.lat, selected.lng]);
    }
  }, [selected]);

  return (
    <section className="absolute left-0 w-screen h-screen">
      <GoogleMap
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={center}
        defaultZoom={15}
        center={center}
        zoom={!selected ? 15 : 17}
      >
        {/* reversing the array so the first entry will come on top of the other marks */}
        {mapData.reverse().map((data) => (
          <CustomMarker
            key={data.lat}
            lat={data.lat}
            lng={data.lng}
            data={data}
          />
        ))}
      </GoogleMap>
    </section>
  );
};

export default React.memo(GoogleMapView);
