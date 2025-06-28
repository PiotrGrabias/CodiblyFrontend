import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import SearchControl from "./Search";

export default function Map({ position, onLocationFound }) {
  return (
    <div className="h-full w-full">
      <MapContainer
        center={position || [51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <SearchControl onLocationFound={onLocationFound} />
      </MapContainer>
    </div>
  );
}
