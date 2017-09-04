import React, { Component } from 'react';
import './App.css';
import {RenderList} from './home.js';
import {rows} from './home.js';


class App extends Component {
    render(){
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome!</h2>
        </div>
        <div>
        {RenderList(rows)}
        </div>
      </div>
    );
  }
}

export default App;
