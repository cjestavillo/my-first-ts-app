import React from 'react';
import logo from './logo.svg';
import './App.css';

interface MyMessageProps {
  message: string;
}

function MyMessage({ message }: MyMessageProps) {
  return <div>I shall speak! My message is: {message}</div>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyMessage message={"Hello"} />
        
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
      </header>
    </div>
  );
}

export default App;
