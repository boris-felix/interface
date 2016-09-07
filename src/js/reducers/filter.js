import * as AT from '../constants/actionTypes';
const initialState = null;

export default (state = initialState, action) => {
	const { type } = action;

	if (type == AT.FILTER_VALUES) {
		return action.value
	}

	return state;
}