// src/components/Make.js
import React from 'react';

const data = {

	'ford': {
		'name' : 'Ford' ,
		'icon' : 'ford.png',
	},

	'acura' : {
		'name' : 'Acura',
		'icon' : 'acura.png' ,
	},
};

export default class Make extends React.Component {

	render() {
		const name = data[this.props.code].name;
		const icon =data[this.props.code].icon;
		return (
			<span className="make">
				<img className = "icon" title={name} src={`/img/${icon}`}/>
				{this.props.showName && <span className="name"> {name} </span>}
			</span>
			);
	}
}