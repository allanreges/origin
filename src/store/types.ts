export const UPDATE_AMOUNT = 'UPDATE_AMOUNT';
export const UPDATE_DATE = 'UPDATE_DATE';

export interface FinancialPlanState {
	amount: string;
	date: Date;
}

export interface UpdateAmountAction {
	type: typeof UPDATE_AMOUNT;
	amount: string;
}

export interface UpdateDateAction {
	type: typeof UPDATE_DATE;
	date: Date;
}

export type DispatchAmount = (args: UpdateAmountAction) => UpdateAmountAction;
export type DispatchDate = (args: UpdateDateAction) => UpdateDateAction;

export type ActionsTypes = UpdateAmountAction | UpdateDateAction;
