import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    const missões = missions;
    return (
      <div data-testid="missions" className="missions">
        <Title headline="Missões" />
        <div className="missions-container">
          {missões.map((missão) => (
            <MissionCard
              name={ missão.name }
              year={ missão.year }
              country={ missão.country }
              destination={ missão.destination }
              key={ missão.name }
          />))}
        </div>
      </div>

    );
  }
}

export default Missions;
