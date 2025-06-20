import React from 'react';

export default function IncorrectGuessesList({ guesses }) {
  if (!guesses || guesses.length === 0) {
    return null;
  }

  return (
    <div style={{
      position: 'absolute',
      right: '20px',
      top: '80px',
      backgroundColor: 'white',
      padding: '15px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
      maxHeight: 'calc(100vh - 100px)',
      overflowY: 'auto',
      zIndex: 1000,
      minWidth: '200px'
    }}>
      <h2 style={{ margin: '0 0 10px 0', fontSize: '18px', color: '#d9534f' }}>Intentos errados</h2>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          {guesses.map((name) => (
            <li key={name} style={{
              padding: '8px 0',
              borderBottom: '1px solid #eee',
              color: '#333'
            }}>
              <span>{name}</span>
            </li>
          ))}
        </ul>
    </div>
  );
} 