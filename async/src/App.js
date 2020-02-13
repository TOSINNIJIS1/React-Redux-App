import React from 'react';
import './App.css';
import Rick from './mapping';
import {fetch} from './components/action'
import { connect } from 'react-redux';


function App() {


  return (
    <div className="App">
      <header className="App-header">
        <Rick />
      </header>
    </div>
  );
}

export default App