import { GeoJSON } from 'react-leaflet';
import { useCallback, useRef } from 'react';
import '../styles/MunicipalityLayer.css';

export default function MunicipalityLayer({ 
  municipalities, 
  visited, 
  onMunicipalityClick,
  showTooltips = true,
  incorrectGuesses = [],
  revealedMunicipality = null
}) {
  const layerRef = useRef();

  const styleMunicipality = useCallback((feature) => {
    const name = feature.properties.NomeConcel || feature.properties.NOMBRE;

    if (revealedMunicipality && name === revealedMunicipality) {
      return {
        fillColor: '#0da5b5',
        color: '#086874',
        weight: 2,
        fillOpacity: 0.82,
        interactive: false
      };
    }

    if (incorrectGuesses.includes(name)) {
      return {
        fillColor: '#d93e3e',
        color: '#8f1a1f',
        weight: 1.2,
        fillOpacity: 0.78,
        interactive: false
      };
    }

    return {
      fillColor: visited.includes(name) ? '#198754' : '#f5f9ff',
      color: visited.includes(name) ? '#0f5736' : '#315172',
      weight: 1,
      fillOpacity: visited.includes(name) ? 0.74 : 0.68,
      interactive: true
    };
  }, [visited, incorrectGuesses, revealedMunicipality]);

  const onEachFeature = useCallback((feature, layer) => {
    const name = feature.properties.NomeConcel || feature.properties.NOMBRE;
    
    if (showTooltips) {
      // Añadir tooltip
      layer.bindTooltip(name, {
        permanent: false,
        direction: 'top',
        className: 'municipality-tooltip'
      });
    }

    layer.on({
      click: (e) => {
        e.originalEvent.preventDefault();
        e.originalEvent.stopPropagation();
        onMunicipalityClick(name);
      },
      mousedown: (e) => {
        e.originalEvent.preventDefault();
        e.originalEvent.stopPropagation();
      }
    });
  }, [onMunicipalityClick, showTooltips]);

  return (
    <GeoJSON
      ref={layerRef}
      data={municipalities}
      style={styleMunicipality}
      onEachFeature={onEachFeature}
      eventHandlers={{
        click: (e) => {
          e.originalEvent.preventDefault();
          e.originalEvent.stopPropagation();
        }
      }}
    />
  );
} 
