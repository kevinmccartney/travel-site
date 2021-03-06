import React from 'react';
import { Link } from 'react-router-dom';

const CitySelect = props => {
  const showCities = () => {
    return (
      <div>
        <h1>{props.currentState}</h1>
        <ul>
          {props.states.filter(state => state.name === props.currentState).map(state =>
            state.cities.map(city =>
              <li>{city}</li>
            )
          )}
        </ul>

      </div>
    );
  }

  return (
    <div className="city-select-page">
    {showCities()}
    </div>
  );
};

export default CitySelect;
