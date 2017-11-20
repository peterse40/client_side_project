// src/components/AthletePage.js

import React from 'react';
import { Link } from 'react-router';

import NotFoundPage from './NotFoundPage';
import CarsMenu from './CarsMenu';

import Make from './Make';
import cars from '../data/cars';

export default class CarPage extends React.Component {

  render() {

    const id = this.props.params.id;
    const car = cars.filter((car) => car.id === id)[0];
    if (!car) {
      return <NotFoundPage/>;
    }
    const headerStyle = { backgroundImage: `url(/img/${car.cover})` };
    return (
      <div className="car-full">
        <CarsMenu cars={cars}/>
        <div className="car">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={`/img/${car.image}`}/>
            <h2 className="name">{car.name}</h2>
          </div>
          <section className="description">
            <Make code={car.make} showName="true"/>
          </section>
          </div>
          <div className="navigateBack">
          
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}