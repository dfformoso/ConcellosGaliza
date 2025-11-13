import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/GameBox.css';

export default function GameBox({ title, description, path, disabled = false }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!disabled) {
      navigate(path);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`game-box ${disabled ? 'disabled' : ''}`}
    >
      <h2 className="game-box-title">{title}</h2>
      <p className="game-box-description">{description}</p>
      {disabled && (
        <p className="game-box-disabled-text">
          Próximamente
        </p>
      )}
    </div>
  );
} 