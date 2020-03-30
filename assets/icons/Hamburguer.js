import React from 'react';

function Hamburguer({ color }) {
  return (
    <svg viewBox="0 0 100 80" width={30} height={30} fill={color}>
      <path d="M0 0h100v20H0zM0 30h100v20H0zM0 60h100v20H0z" />
    </svg>
  );
}

export default Hamburguer;
