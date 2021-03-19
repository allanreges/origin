import { addMonth } from '../utils/date';
import produce from 'immer';
import {
	FinancialPlanState,
	UPDATE_AMOUNT,
	UPDATE_DATE,
	UpdateAmountAction,
	UpdateDateAction
} from './types';
import reducer from './reducer';
import { expect } from '@jest/globals';

const initialState: FinancialPlanState = {
	amount: '',
	date: addMonth(new Date())
};

describe('Simulation Reducer', () => {
	it('should update the amount', () => {
		const updateAmount: UpdateAmountAction = {
			type: UPDATE_AMOUNT,
			amount: '100.00'
		};
		expect(reducer(initialState, updateAmount)).toEqual({
			...initialState,
			amount: '100.00'
		});
	});
	it('should update the date', () => {
		const updateDate: UpdateDateAction = {
			type: UPDATE_DATE,
			date: new Date('01/01/2021')
		};
		expect(reducer(initialState, updateDate)).toEqual({
			...initialState,
			date: new Date('01/01/2021')
		});
	});
});
