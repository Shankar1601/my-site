import React from 'react';

const BackgroundBlobs = () => {
  const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    zIndex: -1,
    pointerEvents: 'none',
  };

  const baseBlobStyle = {
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(120px)',
    opacity: 0.5,
    animation: 'blobDrift 20s infinite alternate ease-in-out',
  };

  return (
    <div style={containerStyle} aria-hidden="true">
      {/* Top Left Purple Glow */}
      <div 
        style={{
          ...baseBlobStyle,
          top: '-10%',
          left: '-10%',
          width: '50vw',
          height: '50vw',
          minWidth: '300px',
          minHeight: '300px',
          background: 'var(--accent-purple)',
          animationDelay: '0s',
        }} 
      />
      
      {/* Middle Right Cyan Glow */}
      <div 
        style={{
          ...baseBlobStyle,
          top: '30%',
          right: '-10%',
          width: '40vw',
          height: '40vw',
          minWidth: '250px',
          minHeight: '250px',
          background: 'var(--accent-cyan)',
          animationDelay: '-5s',
          animationDuration: '25s'
        }} 
      />
      
      {/* Bottom Left Pink Glow */}
      <div 
        style={{
          ...baseBlobStyle,
          bottom: '-20%',
          left: '15%',
          width: '45vw',
          height: '45vw',
          minWidth: '350px',
          minHeight: '350px',
          background: 'var(--accent-pink)',
          animationDelay: '-10s',
          animationDuration: '30s',
          opacity: 0.3
        }} 
      />
    </div>
  );
};

export default BackgroundBlobs;