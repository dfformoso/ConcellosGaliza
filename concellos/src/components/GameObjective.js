import React from 'react';
import '../styles/GameObjective.css';

export default function GameObjective({ objectiveText }) {
  if (!objectiveText) {
    return null;
  }

  return (
    <div className="objective-container">
      <h2 className="objective-text">Busca: {objectiveText}</h2>
    </div>
  );
} 