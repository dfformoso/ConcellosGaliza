import { MapContainer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map({ children }) {
  return (
    <>
      <style>{`
        .leaflet-container {
          height: 100vh;
          width: 100%;
        }
        
        /* Mobile styles */
        @media (max-width: 768px) {
          .leaflet-container {
            height: 100vh;
          }
        }
      `}</style>
      <MapContainer
        center={[42.9, -8.5]}
        zoom={8}
        style={{ height: '100vh', width: '100%' }}
        zoomControl={false}
        attributionControl={false}
      >
        {children}
      </MapContainer>
    </>
  );
} 