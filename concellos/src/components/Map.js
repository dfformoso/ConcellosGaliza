import { MapContainer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/Map.css';

export default function Map({ children }) {
  return (
    <MapContainer
      center={[42.9, -8.5]}
      zoom={8}
      className="leaflet-container"
      zoomControl={false}
      attributionControl={false}
    >
      {children}
    </MapContainer>
  );
} 