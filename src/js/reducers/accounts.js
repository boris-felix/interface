import * as AT from '../constants/actionTypes';
const initialState = [];

export default (state = initialState, action) => {
	const { type } = action;

	if (type == AT.UPDATE_DATAS) {
		return action.values;
	}

	return state;
}