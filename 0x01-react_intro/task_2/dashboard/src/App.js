import React from 'react';
import './App.css';
import logo from './holberton-logo.jpg';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} alt="Holberton logo" />
	<h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>

	{/* Email Input and Label */}
	<label htmlfor="email">Email:</label>
	<input type="email" id="email" name="email" />
	
	{/* Password Input and Label */}
	<label hrmlfor="password">Password:</label>
	<input type="password" id="password" name="password" />
	
	{/* OK button */}
	<button type="button">OK</button>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
