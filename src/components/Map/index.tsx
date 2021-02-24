import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { OpenStreetMapProvider } from "leaflet-geosearch";

import { Container } from "./styles";

interface Props {
  location: string;
}

const Map: React.FC<Props> = ({ location }) => {
  const [latLng, setLatLng] = useState<any>([]);
  const provider = new OpenStreetMapProvider();

  useEffect(() => {
    getPosition();

    // eslint-disable-next-line
  }, [location]);

  async function getPosition() {
    const results = (await provider.search({ query: location })) as any;
    console.log(results[0]);

    if (results[0] && results[0].x && results[0].y) {
      setLatLng([Number(results[0].y), Number(results[0].x)]);
      console.log(latLng);
    }
  }

  return (
    <Container>
      {latLng.length > 0 && (
        <MapContainer center={latLng} zoom={16} style={{ height: "200px" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={latLng}>
            <Popup>{location}</Popup>
          </Marker>
        </MapContainer>
      )}
    </Container>
  );
};

export default Map;
