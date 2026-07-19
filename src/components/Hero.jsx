import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="media-frame">
        {/* Full-bleed cinematic photography — edge-to-edge, zero radius */}
        <img 
          src="/dp.jpg" 
          alt="Shankar A." 
          className="hero-image" 
        />
        
        {/* Wordmark Lockup: Stacked, bottom-left anchored, pure white */}
        <h1 className="hero-wordmark text-display">
          <span className="wordmark-line">SHAN</span>
          <span className="wordmark-line">KAR</span>
          <span className="wordmark-line">A.</span>
        </h1>

        {/* Credit Caption: Small metadata text inset */}
        <div className="hero-caption">
          FULL STACK DEVELOPER — CHENNAI, IN
        </div>
      </div>
    </section>
  );
};

export default Hero;