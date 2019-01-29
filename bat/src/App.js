import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import test_data from "./test_data.json";
import formatData from "./formatdata";

class App extends Component {
  render() {
    return (
      <div className="App">
        <a href="." class="link-no-underline">
          <header className="App-header">
            <span className="App-header-acronym">B</span>ot-
            <span className="App-header-acronym">A</span>ssisted
            <span className="App-header-acronym">T</span>rends
          </header>
        </a>

        <div className="App-body">
          {formatData(test_data)}
        </div>
      </div>
    );
  }
}

export default App;
