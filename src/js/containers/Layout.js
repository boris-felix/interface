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
					<label className="col-md-6 col-sd-12 col-xs-12">Search for an account</label>
					<input className="col-md-6 col-sd-12 col-xs-12" onChange={onChange} type="text" />
				</div>
				<table className="table">
					<thead>
						<tr className="grid--header">
							<th className="col-md-4 col-sd-6 col-xs-6">Name</th>
							<th className="col-md-4 hidden-sm hidden-xs">Age</th>
							<th className="col-md-4 hidden-sm hidden-xs">Shoe size</th>
							<th className="col-md-4 col-sd-6 col-xs-6">Title</th>
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