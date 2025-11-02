import React from 'react';

export default function GameObjective({ objectiveText }) {
  if (!objectiveText) {
    return null;
  }

  return (
    <>
      <style>{`
        .objective-container {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background-color: white;
          padding: 15px 25px;
          border-radius: 10px;
          box-shadow: 0 -2px 5px rgba(0,0,0,0.1);
          z-index: 1000;
          text-align: center;
          max-width: 90%;
        }
        
        .objective-text {
          margin: 0;
          font-size: 24px;
        }
        
        /* Mobile styles */
        @media (max-width: 768px) {
          .objective-container {
            bottom: 10px;
            padding: 10px 15px;
            width: calc(100% - 40px);
            max-width: none;
          }
          
          .objective-text {
            font-size: 16px;
          }
        }
      `}</style>
      <div className="objective-container">
        <h2 className="objective-text">Busca: {objectiveText}</h2>
      </div>
    </>
  );
} 