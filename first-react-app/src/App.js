import React, { useState } from 'react';
import './App.css';
import Dinner from './Dinner';
import ContextAPI from './ContextApi/contextApi';
import CounterContext from './ContextApi/counterContext';
import Parent from './Reducer/ParentComponent';
import { Fetch } from './GetData/fetch';
import RouterApp from './Router/App';

function App() {
  let countVal = useState(0)
  return (
    <div className="App">
{/* Get Data */}
{/* <Fetch></Fetch> */}
<RouterApp />

{/* Context + Reducer */}
                    {/* <h1>Context API</h1>
                <CounterContext.Provider value={countVal}>
                    <ContextAPI />
                </CounterContext.Provider>
                <h1>Reducer</h1>
                <Parent /> */}


    </div>
  );
}

export default App;
