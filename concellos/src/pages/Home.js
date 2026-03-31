import React from 'react';
import GameBox from '../components/GameBox';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-backdrop-orb home-backdrop-orb-left" />
      <div className="home-backdrop-orb home-backdrop-orb-right" />
      <header className="home-header">
        <p className="home-kicker">Explora Galicia xogando</p>
        <h1 className="home-title">Xeo Galiza</h1>
        <p className="home-subtitle">
          Unha app para descubrir os concellos, practicar xeografía e gardar os lugares que xa coñeces.
        </p>
        <div className="home-micro-stats">
          <span className="home-stat-pill">Mapa interactivo</span>
          <span className="home-stat-pill">Modo xogo</span>
          <span className="home-stat-pill">Progreso gardado</span>
        </div>
      </header>
      <section className="home-games-container">
        <GameBox
          title="Onde está o Concello?"
          description="Identifica onde está o concello que buscamos"
          path="/onde"
          disabled={false}
          tone="teal"
          eyebrow="Modo reto"
        />
        <GameBox
          title="De concello a Concello"
          description="Atopa o camiño máis curto entre dous concellos"
          path="/ruta"
          disabled={true}
          tone="amber"
          eyebrow="Próxima actualización"
        />
        <GameBox
          title="Os concellos que visitei"
          description="Visita e marca os concellos que xa coñeces"
          path="/visitados"
          tone="green"
          eyebrow="Modo progreso"
        />
      </section>
    </div>
  );
} 
