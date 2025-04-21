import React from 'react';
import { useNavigate } from 'react-router-dom';

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
      style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
        opacity: disabled ? 0.7 : 1,
        textAlign: 'center',
        minWidth: '250px',
        maxWidth: '300px',
        margin: '10px'
      }}
      onMouseOver={(e) => !disabled && (e.currentTarget.style.transform = 'translateY(-5px)')}
      onMouseOut={(e) => !disabled && (e.currentTarget.style.transform = 'translateY(0)')}
    >
      <h2 style={{ margin: '0 0 10px 0', color: '#333' }}>{title}</h2>
      <p style={{ margin: 0, color: '#666' }}>{description}</p>
      {disabled && (
        <p style={{ margin: '10px 0 0 0', color: '#999', fontSize: '0.9em' }}>
          Próximamente
        </p>
      )}
    </div>
  );
} 