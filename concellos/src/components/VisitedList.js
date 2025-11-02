import React from 'react';

export default function VisitedList({ visited, onRemove }) {
  return (
    <>
      <style>{`
        .visited-list-container {
          position: absolute;
          right: 20px;
          top: 20px;
          background-color: white;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          max-height: calc(100vh - 40px);
          overflow-y: auto;
          z-index: 1000;
          min-width: 200px;
        }
        
        .visited-list-title {
          margin: 0 0 10px 0;
          font-size: 18px;
        }
        
        .visited-list-empty {
          margin: 0;
          color: #666;
          font-size: 14px;
        }
        
        .visited-list-ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .visited-list-item {
          padding: 8px 0;
          border-bottom: 1px solid #eee;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
        }
        
        .visited-list-remove-button {
          background: none;
          border: none;
          color: #666;
          cursor: pointer;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 18px;
        }
        
        .visited-list-remove-button:hover {
          background-color: #f0f0f0;
        }
        
        /* Mobile styles */
        @media (max-width: 768px) {
          .visited-list-container {
            right: 10px;
            top: 60px;
            padding: 10px;
            min-width: 150px;
            max-width: 200px;
            max-height: calc(100vh - 120px);
          }
          
          .visited-list-title {
            font-size: 14px;
          }
          
          .visited-list-empty {
            font-size: 12px;
          }
          
          .visited-list-item {
            padding: 6px 0;
            font-size: 12px;
          }
          
          .visited-list-remove-button {
            padding: 2px 6px;
            font-size: 16px;
          }
        }
        
        /* Very small screens */
        @media (max-width: 480px) {
          .visited-list-container {
            right: 5px;
            top: 50px;
            padding: 8px;
            min-width: 120px;
            max-width: 150px;
          }
        }
      `}</style>
      <div className="visited-list-container">
        <h2 className="visited-list-title">Concellos Visitados</h2>
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
    </>
  );
} 