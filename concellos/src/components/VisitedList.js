import React from 'react';
import '../styles/VisitedList.css';

export default function VisitedList({ visited, onRemove }) {
  return (
    <div className="visited-list-container">
      <div className="visited-list-header">
        <h2 className="visited-list-title">Concellos Visitados</h2>
        <span className="visited-list-count">{visited.length}</span>
      </div>
      {visited.length === 0 ? (
        <p className="visited-list-empty">Aínda non visitaches ningún concello</p>
      ) : (
        <ul className="visited-list-ul">
          {visited.map((name) => (
            <li key={name} className="visited-list-item">
              <span>{name}</span>
              <button
                onClick={() => onRemove(name)}
                className="visited-list-remove-button"
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
