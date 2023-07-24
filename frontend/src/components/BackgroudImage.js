import React from 'react';

export default function BackgroudImage(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh',
        overflow: 'auto',
        overflowX:'hidden'
      }}
    >
      {props.children}
    </div>
  );
}
