import React, { Component } from 'react';
import './App.css';
import { Table } from './Table';
import { Map } from './Map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        {/* <Table /> */}
        <Map />
      </div>
    );
  }
}

export default App;
