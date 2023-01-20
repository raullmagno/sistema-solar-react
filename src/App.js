import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import PlanetCard from './components/PlanetCard';
import './App.css'


class App extends React.Component {
  render() {
    return (
      <div>
        <p>Sistema Solar</p>
        <Header />  
        <SolarSystem />
        <PlanetCard />
        <Missions />
      </div>
    );
  }
}

export default App;
