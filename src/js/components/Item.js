import React, { Component, PropTypes } from 'react';
import * as Actions from '../actionsCreator';

const { string, number } = PropTypes;

class Item extends Component {

	render () {
		const { name, age, shoe_size, title } = this.props;

		return (
			<tr>
				<td>{name}</td>
				<td>{age}</td>
				<td>{shoe_size}</td>
				<td>{title}</td>
			</tr>
		)
	}
}

Item.PropTypes = {
	name: string.isRequired,
	age: number.isRequired,
	shoe_size: number.isRequired,
	title: string.isRequired
}.isRequired

export default Item;