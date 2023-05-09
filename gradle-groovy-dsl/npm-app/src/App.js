import React, { Component } from 'react';
import logo from './logo.svg';
import TitleBar from './titleBar/TitleBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>
          <TitleBar />
          </div>
        <header className="not_App-header">          
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          
          <p/>                    
          <a className="App-link" target="_blank" href="https://reactjs.org">Page 1</a>
          <p/>
          <a className="App-link" target="_blank" href="https://reactjs.org">Page 2</a>          
          
        </header>
      </div>
    );
  }
}

export default App;
