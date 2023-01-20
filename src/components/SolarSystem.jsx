import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="planetas" className="second-title"/>
        <div className="planets-cards">
          {planetas.map(({ name, image }) => (
            <PlanetCard
              planetName={ name }
              planetImage={ image }
              key={ name }
            />))}
        </div>
        <div className="line">{' '}</div>
      </div>

    );
  }
}

export default SolarSystem;
