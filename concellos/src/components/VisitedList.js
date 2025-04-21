import React from 'react';

export default function VisitedList({ visited, onRemove }) {
  return (
    <div style={{
      position: 'absolute',
      right: '20px',
      top: '20px',
      backgroundColor: 'white',
      padding: '15px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
      maxHeight: 'calc(100vh - 40px)',
      overflowY: 'auto',
      zIndex: 1000,
      minWidth: '200px'
    }}>
      <h2 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>Concellos Visitados</h2>
      {visited.length === 0 ? (
        <p style={{ margin: 0, color: '#666' }}>Aínda non visitaches ningún concello</p>
      ) : (
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          {visited.map((name) => (
            <li key={name} style={{
              padding: '8px 0',
              borderBottom: '1px solid #eee',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span>{name}</span>
              <button
                onClick={() => onRemove(name)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#666',
                  cursor: 'pointer',
                  padding: '4px 8px',
                  borderRadius: '4px'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
} 