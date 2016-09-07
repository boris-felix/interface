import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from '../components/Item';
import { filterValues } from '../actionsCreator';

class Layout extends Component {
	render () {
		const { dispatch, accounts, filter } = this.props; 

		const onChange = (event) => {
			dispatch(filterValues(event.target.value));
		}

		return (
			<div>
				<h1>Search</h1>
				<div className="searchbox">
					<label>Search for an account</label>
					<input onChange={onChange} type="text" />
				</div>
				<table className="table">
					<thead>
						<tr className="grid--header hidden-sd hidden-xs">
							<th className="col-md-4">Name</th>
							<th className="col-md-4">Age</th>
							<th className="col-md-4">Shoe size</th>
							<th className="col-md-4">Title</th>
						</tr>
					</thead>
					<tbody>
						{accounts.filter(({ name }) => {
							return name.match(filter) || !filter;
						}).map((props, index) => {
							return <Item key={index} {...props} />
						})}
					</tbody>
				</table>
			</div>
		)
	}
}

const mapStateToProps = ({ accounts, filter }) => ({
	accounts,
	filter
});

const Container = connect(mapStateToProps)(Layout);

export default Container;