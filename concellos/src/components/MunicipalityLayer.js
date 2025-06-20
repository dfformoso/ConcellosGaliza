import { GeoJSON } from 'react-leaflet';
import { useCallback, useRef } from 'react';
import '../styles/MunicipalityLayer.css';

export default function MunicipalityLayer({ 
  municipalities, 
  visited, 
  onMunicipalityClick,
  showTooltips = true,
  incorrectGuesses = []
}) {
  const layerRef = useRef();

  const styleMunicipality = useCallback((feature) => {
    const name = feature.properties.NomeConcel || feature.properties.NOMBRE;

    if (incorrectGuesses.includes(name)) {
      return {
        fillColor: '#d9534f',
        color: 'black',
        weight: 1,
        fillOpacity: 0.7,
        interactive: false
      };
    }

    return {
      fillColor: visited.includes(name) ? 'blue' : 'white',
      color: 'black',
      weight: 1,
      fillOpacity: 0.6,
      interactive: true
    };
  }, [visited, incorrectGuesses]);

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