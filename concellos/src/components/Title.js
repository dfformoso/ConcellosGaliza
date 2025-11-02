import { useNavigate } from 'react-router-dom';

export default function Title({ title }) {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .title-container {
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 20px;
          z-index: 1000;
        }
        
        .title-button {
          background-color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 5px;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          display: flex;
          align-items: center;
          gap: 8px;
          transition: background-color 0.2s;
        }
        
        .title-button:hover {
          background-color: #f0f0f0;
        }
        
        .title-h1 {
          background-color: white;
          padding: 10px 20px;
          border-radius: 5px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          margin: 0;
        }
        
        /* Mobile styles */
        @media (max-width: 768px) {
          .title-container {
            top: 10px;
            gap: 8px;
            width: calc(100% - 20px);
            max-width: 400px;
          }
          
          .title-button {
            padding: 6px 12px;
            font-size: 12px;
          }
          
          .title-button > span:first-child {
            font-size: 16px;
          }
          
          .title-h1 {
            padding: 6px 12px;
            font-size: 16px;
          }
        }
      `}</style>
      <div className="title-container">
        <button
          onClick={() => navigate('/')}
          className="title-button"
        >
          <span style={{ fontSize: '20px' }}>←</span>
          <span>Volver</span>
        </button>
        <h1 className="title-h1">
          {title}
        </h1>
      </div>
    </>
  );
} 