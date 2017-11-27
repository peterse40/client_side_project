// src/components/Model.js
import React from 'react';

const typeMap = {
  'M': 'Focus',
  'Y': '2013',
  'C': 'Black'
};

export default class Model extends React.Component {
  render() {
    return (
      <li className="model">
        <span className={`symbol symbol-${this.props.type}`} title={typeMap[this.props.make]}>{this.props.make}</span>
        <span className="model">{this.props.model}</span>
        <span className="year"> {this.props.year}</span>
        <span className="color"> ({this.props.color})</span>
        <span className="image"> {this.props.image}</span>
      </li>
    );
  }
}