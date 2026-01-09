import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function MapView() {
  return (
    <MapContainer
      center={[21.1458, 79.0882]} // Nagpur location
      zoom={13}
      className="h-80 w-full rounded-lg"
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[21.1458, 79.0882]}>
        <Popup>
          Active Ride Location 🚕
        </Popup>
      </Marker>
    </MapContainer>
  );
}
export default MapView;
