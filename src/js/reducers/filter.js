import * as AT from '../constants/actionTypes';
const initialState = null;

export default (state = initialState, action) => {
	const { type, value } = action;

	if (type == AT.FILTER_VALUES && typeof value == 'string') {
		return value
	}

	return state;
}