import React from 'react';
import Map from '../components/Map';
import MunicipalityLayer from '../components/MunicipalityLayer';
import Title from '../components/Title';
import VisitedList from '../components/VisitedList';
import { useMunicipalities } from '../hooks/useMunicipalities';
import '../styles/MapPage.css';

export default function MapPage() {
  const { municipalities, visited, toggleMunicipality, removeMunicipality } = useMunicipalities();

  return (
    <div className="map-page-container">
      <Title title="Os concellos que visitei" />
      <VisitedList visited={visited} onRemove={removeMunicipality} />
      <Map>
        {municipalities.length > 0 && (
          <MunicipalityLayer
            municipalities={municipalities}
            visited={visited}
            onMunicipalityClick={toggleMunicipality}
            showTooltips={true}
          />
        )}
      </Map>
    </div>
  );
} 