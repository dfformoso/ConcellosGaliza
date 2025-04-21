import { useNavigate } from 'react-router-dom';

export default function Title() {
  const navigate = useNavigate();

  return (
    <div style={{
      position: 'absolute',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      zIndex: 1000
    }}>
      <button
        onClick={() => navigate('/')}
        style={{
          backgroundColor: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '5px',
          cursor: 'pointer',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'background-color 0.2s'
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
      >
        <span style={{ fontSize: '20px' }}>←</span>
        Volver
      </button>
      <h1 style={{
        backgroundColor: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        margin: 0
      }}>
        Os concellos que visitei
      </h1>
    </div>
  );
} 