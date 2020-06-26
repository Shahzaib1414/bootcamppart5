import React, { useState } from 'react';
import Parent from './Parent.js';
import './App.css';
import CounterContext from './CounterContext.js';

function App() {
  let countState = useState(12)
  return (
    <CounterContext.Provider   value ={countState}>
      <div>
        <Parent />
      </div>
    </CounterContext.Provider>
      
  );
}

export default App;
