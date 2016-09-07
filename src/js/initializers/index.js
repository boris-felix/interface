import { updateDatas } from '../actionsCreator';

const Data = [
	{
		name: 'Toto',
		age: 45,
		shoe_size: 8,
		title: 'CEO'
	},
	{
		name: 'Titi',
		age: 23,
		shoe_size: 4,
		title: 'Accountant'
	},
	{
		name: 'Tutu',
		age: 30,
		shoe_size: 8,
		title: 'CTO'
	}
];

/**
 * Temporary initializer where we will fetch the datas from the future api.
 * For the time being we use some mocked datas but it will be really straight
 * forward to switch to a proper AJAX call as the dispatcher will always provide
 * the final datas to the UI at the end.
 */

export default (store) => {
	store.dispatch(updateDatas(Data));
}