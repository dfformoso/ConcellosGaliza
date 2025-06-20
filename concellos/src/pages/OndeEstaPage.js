import React, { useState, useEffect, useCallback, useRef } from 'react';
import Map from '../components/Map';
import Title from '../components/Title';
import { useMunicipalities } from '../hooks/useMunicipalities';
import MunicipalityLayer from '../components/MunicipalityLayer';
import GameObjective from '../components/GameObjective';
import IncorrectGuessesList from '../components/IncorrectGuessesList';

export default function OndeEstaPage() {
  const { municipalities } = useMunicipalities();
  const [targetMunicipality, setTargetMunicipality] = useState(null);
  const [incorrectGuesses, setIncorrectGuesses] = useState([]);
  
  // The ref will hold the most up-to-date target, avoiding stale closures.
  const targetMunicipalityRef = useRef(null);

  const selectNewTarget = useCallback(() => {
    if (municipalities.length === 0) return;

    let validChoices = municipalities;
    // Use the ref to get the *actual* current target for comparison.
    if (targetMunicipalityRef.current && municipalities.length > 1) {
      validChoices = municipalities.filter(m => 
        (m.properties.NomeConcel || m.properties.NOMBRE) !== targetMunicipalityRef.current
      );
    }
    
    const randomIndex = Math.floor(Math.random() * validChoices.length);
    const newTarget = validChoices[randomIndex];
    const newName = newTarget.properties.NomeConcel || newTarget.properties.NOMBRE;

    // Update both the state (to trigger re-render) and the ref (for immediate access).
    setTargetMunicipality(newName);
    targetMunicipalityRef.current = newName;
  }, [municipalities]);

  useEffect(() => {
    if (municipalities.length > 0) {
      selectNewTarget();
    }
  }, [municipalities, selectNewTarget]);

  const handleMunicipalityClick = useCallback((name) => {
    // Compare against the ref, which is always up-to-date.

    if (name === targetMunicipalityRef.current) {
      alert('Correcto! 🎉');
      setIncorrectGuesses([]);
      selectNewTarget();
    } else if (!incorrectGuesses.includes(name)) {
      setIncorrectGuesses(prev => [...prev, name]);
    }
  }, [selectNewTarget, incorrectGuesses]);

  return (
    <div style={{ position: 'relative' }}>
      <Title title="Onde está o Concello?" />
      <IncorrectGuessesList guesses={incorrectGuesses} />
      <Map>
        {municipalities.length > 0 && targetMunicipality && (
          <MunicipalityLayer
            municipalities={municipalities}
            visited={[]}
            onMunicipalityClick={handleMunicipalityClick}
            showTooltips={false}
            incorrectGuesses={incorrectGuesses}
          />
        )}
      </Map>
      <GameObjective objectiveText={targetMunicipality} />
    </div>
  );
} 