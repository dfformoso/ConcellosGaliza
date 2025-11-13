import React from 'react';
import GameBox from '../components/GameBox';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">
        Xeo Galiza
      </h1>
      <div className="home-games-container">
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