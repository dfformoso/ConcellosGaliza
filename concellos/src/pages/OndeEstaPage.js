import React, { useState, useEffect, useCallback, useRef } from 'react';
import Map from '../components/Map';
import Title from '../components/Title';
import { useMunicipalities } from '../hooks/useMunicipalities';
import MunicipalityLayer from '../components/MunicipalityLayer';
import GameObjective from '../components/GameObjective';
import IncorrectGuessesList from '../components/IncorrectGuessesList';
import '../styles/OndeEstaPage.css';

export default function OndeEstaPage() {
  const { municipalities } = useMunicipalities();
  const [targetMunicipality, setTargetMunicipality] = useState(null);
  const [incorrectGuesses, setIncorrectGuesses] = useState([]);
  const [isTargetRevealed, setIsTargetRevealed] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const MAX_ATTEMPTS = 5;
  
  // The ref will hold the most up-to-date target, avoiding stale closures.
  const targetMunicipalityRef = useRef(null);

  const selectNewTarget = useCallback(() => {
    if (municipalities.length === 0) return;

    setIncorrectGuesses([]);
    setIsTargetRevealed(false);
    setStatusMessage('');

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

  useEffect(() => {
    if (incorrectGuesses.length >= MAX_ATTEMPTS && !isTargetRevealed) {
      setIsTargetRevealed(true);
      setStatusMessage('Non atopaches o concello, continúa xogando!');
    }
  }, [incorrectGuesses, isTargetRevealed]);

  const handleMunicipalityClick = useCallback((name) => {
    // Compare against the ref, which is always up-to-date.

    if (!targetMunicipalityRef.current) {
      return;
    }

    if (isTargetRevealed) {
      selectNewTarget();
      return;
    }

    if (name === targetMunicipalityRef.current) {
      setStatusMessage('Correcto! 🎉');
      setIsTargetRevealed(true);
    } else {
      setIncorrectGuesses(prev => {
        if (prev.includes(name) || prev.length >= MAX_ATTEMPTS) {
          return prev;
        }

        return [...prev, name];
      });
    }
  }, [selectNewTarget, isTargetRevealed]);

  return (
    <div className="onde-esta-page-container">
      <Title title="Onde está o Concello?" />
      <IncorrectGuessesList guesses={incorrectGuesses} />
      {statusMessage && (
        <button
          onClick={selectNewTarget}
          className={`status-message-button ${statusMessage.includes('Correcto') ? 'status-message-button-success' : ''}`}
        >
          {statusMessage}
        </button>
      )}
      <Map>
        {municipalities.length > 0 && targetMunicipality && (
          <MunicipalityLayer
            municipalities={municipalities}
            visited={[]}
            onMunicipalityClick={handleMunicipalityClick}
            showTooltips={false}
            incorrectGuesses={incorrectGuesses}
            revealedMunicipality={isTargetRevealed ? targetMunicipalityRef.current : null}
          />
        )}
      </Map>
      <GameObjective objectiveText={targetMunicipality} />
    </div>
  );
} 