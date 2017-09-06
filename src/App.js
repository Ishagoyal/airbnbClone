import React, { Component } from 'react';
import './App.css';
import Home from './home.js';

class App extends Component {
    render(){
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome!</h2>
          <div>
            <Home />
          </div> 
        </div>
      </div>
    );
  }
}

export default App;