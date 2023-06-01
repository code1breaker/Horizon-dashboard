import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  return (
    <MapContainer
      style={{
        height: "100%",
        width: "100%",
        zIndex: "1",
        filter: "grayscale(100%)",
      }}
      className=" rounded-3xl dark:bg-[#131c41]"
      center={[20.5937, 78.9629]}
      zoom={10}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[20.5937, 78.9629]} />
    </MapContainer>
  );
};

export default Map;
