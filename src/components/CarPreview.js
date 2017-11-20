// src/components/CarPreview.js

import React from 'react';
import { Link } from 'react-router';

export default class CarPreview extends React.Component {

	render() {

		return (

			<Link to={`/car/${ths.props.id}`}>
				<div className="car-preview">
					<img src={`img/${this.props.image}`}/>
				<h2 className="name">{this.props.name}</h2>
				</div>
			</Link>
			);
	}
}