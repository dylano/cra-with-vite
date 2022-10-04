import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <img
            src="https://vitejs.dev/logo-with-shadow.png"
            className="App-logo"
            alt="logo"
          />
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <span>
          ⚡️
          <a
            className="App-link"
            href={process.env.REACT_APP_VITE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Use Vite
          </a>
          ⚡️
        </span>
      </header>
    </div>
  );
}

export default App;
