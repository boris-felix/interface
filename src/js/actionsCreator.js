import * as AT from './constants/actionTypes';

export const updateDatas = (data) => ({
	type: AT.UPDATE_DATAS,
	values: data
});

export const filterValues = (value) => ({
	type: AT.FILTER_VALUES,
	value
});