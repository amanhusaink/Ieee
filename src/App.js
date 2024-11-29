import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Achievements from './components/Achievements/Achievements';
import Events from './components/Events/Events';
import Excom from './components/Excom/Excom';
import Chapters from './components/Chapters/Chapters';

function App() {
  
  return (
    <div className="App">
    <NavBar/>
    <About/>
    <Achievements/>
    <Events/>
    <Excom/>
    <Chapters/>
    </div>
  );
}

export default App;
