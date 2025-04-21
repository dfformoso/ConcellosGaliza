import { GeoJSON } from 'react-leaflet';
import { useCallback, useRef } from 'react';
import '../styles/MunicipalityLayer.css';

export default function MunicipalityLayer({ 
  municipalities, 
  visited, 
  onMunicipalityClick 
}) {
  const layerRef = useRef();

  const styleMunicipality = useCallback((feature) => {
    const name = feature.properties.NomeConcel || feature.properties.NOMBRE;
    return {
      fillColor: visited.includes(name) ? 'blue' : 'white',
      color: 'black',
      weight: 1,
      fillOpacity: 0.6,
      interactive: true
    };
  }, [visited]);

  const onEachFeature = useCallback((feature, layer) => {
    const name = feature.properties.NomeConcel || feature.properties.NOMBRE;
    
    // Añadir tooltip
    layer.bindTooltip(name, {
      permanent: false,
      direction: 'top',
      className: 'municipality-tooltip'
    });

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
  }, [onMunicipalityClick]);

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