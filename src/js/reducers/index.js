import { combineReducers } from 'redux';
import accounts from './accounts';
import filter from './filter';

const Reducers = combineReducers({
	accounts,
	filter
});

export default Reducers;