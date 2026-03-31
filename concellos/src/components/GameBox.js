import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/GameBox.css';

export default function GameBox({
  title,
  description,
  path,
  disabled = false,
  tone = 'teal',
  eyebrow = ''
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!disabled) {
      navigate(path);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`game-box game-box-${tone} ${disabled ? 'disabled' : ''}`}
      disabled={disabled}
      aria-disabled={disabled ? 'true' : undefined}
    >
      {eyebrow && <span className="game-box-eyebrow">{eyebrow}</span>}
      <h2 className="game-box-title">{title}</h2>
      <p className="game-box-description">{description}</p>
      {disabled && (
        <p className="game-box-disabled-text">
          Próximamente
        </p>
      )}
    </button>
  );
} 
