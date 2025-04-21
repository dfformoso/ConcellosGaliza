// Requisitos: 
// - React + react-leaflet + leaflet
// - Archivo GeoJSON llamado "galicia_municipios.geojson" en public/


import Map from './components/Map';
import MunicipalityLayer from './components/MunicipalityLayer';
import Title from './components/Title';
import VisitedList from './components/VisitedList';
import { useMunicipalities } from './hooks/useMunicipalities';

export default function App() {
  const { municipalities, visited, toggleMunicipality, removeMunicipality } = useMunicipalities();

  return (
    <div style={{ position: 'relative' }}>
      <Title />
      <VisitedList visited={visited} onRemove={removeMunicipality} />
      <Map>
        {municipalities.length > 0 && (
          <MunicipalityLayer
            municipalities={municipalities}
            visited={visited}
            onMunicipalityClick={toggleMunicipality}
          />
        )}
      </Map>
    </div>
  );
}
