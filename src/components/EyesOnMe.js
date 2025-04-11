// src/components/EyesOnMe.js
import React from 'react';
import EyesOnMeButton from './EyesOnMeButton';

function EyesOnMe() {
  function handleFocus() {
    console.log("Good!");
  }

  function handleBlur() {
    console.log("Hey! Eyes on me!");
  }

  return <EyesOnMeButton onFocus={handleFocus} onBlur={handleBlur} />;
}

export default EyesOnMe;
