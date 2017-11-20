// src/components/IndexPage.js

import React from 'react';
import CarPreview from './CarPreview';

import cars from '../data/cars';

export default class IndexPage extends React.Component {
  
  render() {

    return (

      <div className="home">
        <div className="cars-selector">
          {cars.map(carData => <CarPreview key={carData.id} {...carData} />)}
        </div>
      </div>
    );
  }
}