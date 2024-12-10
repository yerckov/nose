import { useState } from 'react';
import './ToggleButton.css';

function ToggleButton() {
  const storageKey = 'theme-preference';

  const getColorPreference = () => {
    if (localStorage.getItem(storageKey))
      return localStorage.getItem(storageKey);
    else
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
  };

  const reflectPreference = () => {
    document.firstElementChild
      .setAttribute('data-theme', theme.value)
  
    document
      .querySelector('#theme-toggle')
      ?.setAttribute('aria-label', theme.value)
  }

  const setPreference = () => {
    localStorage.setItem(storageKey, theme.value)
    reflectPreference()
  }

  const onClick = () => {
    theme.value = theme.value === 'light'
      ? 'dark'
      : 'light'
  
    setPreference()
  }


  return (
    //   <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
    //     <h1>{isDarkMode ? 'Modo Oscuro' : 'Modo Claro'}</h1>
    //     <button onClick={toggleMode}>
    //       Cambiar Modo
    //     </button>
    //   </div>
    <button
      id="theme-toggle"
      title="Toggles light & dark"
      aria-label="auto"
      className="theme-toggle"
      onClick={onClick}
    >
      <svg
        className="sun-and-moon"
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <circle
          className="sun"
          cx="12"
          cy="12"
          r="6"
          mask="url(#moon-mask)"
          fill="currentColor"
        />
        <g className="sun-beams" stroke="currentColor">
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </g>
        <mask className="moon" id="moon-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <circle cx="24" cy="10" r="6" fill="black" />
        </mask>
      </svg>
    </button>
  );
}

export { ToggleButton };
