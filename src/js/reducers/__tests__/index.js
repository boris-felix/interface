import React from 'react';
import { expect } from 'chai';
import {
	UPDATE_DATAS,
	FILTER_VALUES
} from '../../constants/actionTypes';
import AccountsReducer from '../accounts';
import FilterReducer from '../filter';

describe('Accounts reducer', () => {
	it('should return an array of values', () => {
		expect(AccountsReducer(undefined, {
			type: UPDATE_DATAS,
			values: undefined 
		})).to.eql([]);

		expect(AccountsReducer(undefined, {
			type: UPDATE_DATAS,
			values: [
				{
					foo: 'bar'
				}
			]
		})).to.eql([
			{
				foo: 'bar'
			}
		]);
	});
});

describe('Filter reducer', () => {
	it('should return null if no values passed', () => {
		expect(FilterReducer(undefined, {
			type: FILTER_VALUES,
			value: undefined 
		})).to.eql(null);
	});

	it('should return the value passed in argument', () => {
		expect(FilterReducer(undefined, {
			type: FILTER_VALUES,
			value: 'foo' 
		})).to.eql('foo');
	});
});
