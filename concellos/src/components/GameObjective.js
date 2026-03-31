import React from 'react';
import '../styles/GameObjective.css';

export default function GameObjective({ objectiveText }) {
  if (!objectiveText) {
    return null;
  }

  return (
    <div className="objective-container">
      <p className="objective-label">Concello obxectivo</p>
      <h2 className="objective-text">{objectiveText}</h2>
    </div>
  );
}
