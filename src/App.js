import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Achievements from './components/Achievements/Achievements';
import Events from './components/Events/Events';
import Excom from './components/Excom/Excom';

function App() {
  
  return (
    <div className="App">
    <NavBar/>
    <About/>
    <Achievements/>
    <Events/>
    <Excom/>
    </div>
  );
}

export default App;
