
import { useState } from 'react';
import './App.css';
import Size from './components/Size';
import RandomNumber from './components/RandomNumber';
import RandomColor from './components/RandomColor';

function App() {

  return (
    <div className='app'>
      <Size />
      <RandomNumber />
      <RandomColor />

    </div>

  );
}

export default App;
