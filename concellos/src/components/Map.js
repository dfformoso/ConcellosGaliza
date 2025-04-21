import { MapContainer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map({ children }) {
  return (
    <MapContainer
      center={[42.9, -8.5]}
      zoom={8}
      style={{ height: '100vh', width: '100%' }}
      zoomControl={false}
      attributionControl={false}
    >
      {children}
    </MapContainer>
  );
} 