import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const planetas = Planets;
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planetas.map((item) => (<PlanetCard
          planetName={ item.name }
          planetImage={ item.image }
          key={ item.name }
        />))}
      </div>

    );
  }
}

export default SolarSystem;
