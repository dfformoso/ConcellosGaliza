import React from 'react';
import '../styles/IncorrectGuessesList.css';

export default function IncorrectGuessesList({ guesses }) {
  if (!guesses || guesses.length === 0) {
    return null;
  }

  return (
    <div className="incorrect-guesses-container">
      <div className="incorrect-guesses-header">
        <h2 className="incorrect-guesses-title">Intentos errados</h2>
        <span className="incorrect-guesses-count">{guesses.length}</span>
      </div>
      <ul className="incorrect-guesses-list">
        {guesses.map((name) => (
          <li key={name} className="incorrect-guesses-item">
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
} 
