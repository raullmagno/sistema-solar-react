import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" className="second-title" />
        <div className="planets-cards">
          {planets.map(({ name, image }) => (
            <PlanetCard planetName={ name } planetImage={ image } key={ name } />
          ))}
        </div>
        <div className="line">{' '}</div>
      </div>
    );
  }
}

export default SolarSystem;

