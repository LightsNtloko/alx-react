import React from 'react';
import './App.css';
import logo from './holberton-logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Holberton logo" />
	<h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>Copyright 2020 - Holberton School</p>
      </div>
    </div>
  );
}

export default App;
