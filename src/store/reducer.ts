import { addMonth } from '../utils/date';
import produce from 'immer';
import {
	FinancialPlanState,
	ActionsTypes,
	UPDATE_AMOUNT,
	UPDATE_DATE
} from './types';

const initialState: FinancialPlanState = {
	amount: '',
	date: addMonth(new Date())
};

const reducer = (
	state: FinancialPlanState = initialState,
	action: ActionsTypes
): FinancialPlanState => {
	switch (action.type) {
		case UPDATE_AMOUNT:
			return produce(state, draft => {
				draft.amount = action.amount;
			});
		case UPDATE_DATE:
			return produce(state, draft => {
				draft.date = action.date;
			});
		default:
			return state;
	}
};

export default reducer;
