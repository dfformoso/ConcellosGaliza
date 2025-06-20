import React from 'react';
import GameBox from '../components/GameBox';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f5f5f5',
      padding: '20px'
    }}>
      <h1 style={{
        marginBottom: '40px',
        color: '#333',
        textAlign: 'center'
      }}>
        Xeo Galiza
      </h1>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        maxWidth: '1000px'
      }}>
        <GameBox
          title="Onde está o Concello?"
          description="Identifica onde está o concello que buscamos"
          path="/onde"
          disabled={false}
        />
        <GameBox
          title="De concello a Concello"
          description="Atopa o camiño máis curto entre dous concellos"
          path="/ruta"
          disabled={true}
        />
        <GameBox
          title="Os concellos que visitei"
          description="Visita e marca os concellos que xa coñeces"
          path="/visitados"
        />
      </div>
    </div>
  );
} 