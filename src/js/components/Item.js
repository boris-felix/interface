import React, { Component, PropTypes } from 'react';
import * as Actions from '../actionsCreator';

const { string, number } = PropTypes;

class Item extends Component {

	render () {
		const { name, age, shoe_size, title } = this.props;

		return (
			<tr>
				<td className="col-md-4 col-sd-6 col-xs-6">{name}</td>
				<td className="col-md-4 hidden-sm hidden-xs">{age}</td>
				<td className="col-md-4 hidden-sm hidden-xs">{shoe_size}</td>
				<td className="col-md-4 col-sd-6 col-xs-6">{title}</td>
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