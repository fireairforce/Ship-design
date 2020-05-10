import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello'
import LikeButton from './components/LikeButoon'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <Hello message={'hello world1'}/>
        <LikeButton />
      </header>
    </div>
  );
}

export default App;
