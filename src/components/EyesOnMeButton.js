
import React from 'react';

function EyesOnMeButton({ onFocus, onBlur }) {
  return (
    <button onFocus={onFocus} onBlur={onBlur}>
      Eyes on me
    </button>
  );
}

export default EyesOnMeButton;
