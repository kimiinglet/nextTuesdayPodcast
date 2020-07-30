import React from 'react';
import './App.css';
import Homepage from "../src/Components/Homepage";
import Navbar from '../src/Components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Homepage />
        <p>
          <code>If you can't take the heat, don't take the hit</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
