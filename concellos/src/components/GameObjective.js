import React from 'react';

export default function GameObjective({ objectiveText }) {
  if (!objectiveText) {
    return null;
  }

  return (
    <div style={{
      position: 'absolute',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'white',
      padding: '15px 25px',
      borderRadius: '10px',
      boxShadow: '0 -2px 5px rgba(0,0,0,0.1)',
      zIndex: 1000,
      textAlign: 'center'
    }}>
      <h2 style={{ margin: 0, fontSize: '24px' }}>Busca: {objectiveText}</h2>
    </div>
  );
} 