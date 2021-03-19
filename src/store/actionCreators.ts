import {
	UpdateAmountAction,
	UpdateDateAction,
	UPDATE_AMOUNT,
	UPDATE_DATE,
	DispatchAmount,
	DispatchDate
} from './types';

export function updateAmount(amount: string) {
	const action: UpdateAmountAction = {
		type: UPDATE_AMOUNT,
		amount
	};
	return (dispatch: DispatchAmount) => {
		dispatch(action);
	};
}

export function updateDate(date: Date) {
	const action: UpdateDateAction = {
		type: UPDATE_DATE,
		date
	};
	return (dispatch: DispatchDate) => {
		dispatch(action);
	};
}
