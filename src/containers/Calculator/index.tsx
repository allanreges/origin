import * as React from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { Container, Header, Content, Inputs } from './styles';
import AmountInput from '../../components/AmountInput';
import DateInput from '../../components/DateInput';
import House from '../../assets/images/house.svg';
import Result from '../../components/Result';
import Button from '../../components/Button';
import { compareAsc } from 'date-fns';
import {
	addMonth,
	subMonth,
	getLabel,
	getNumberOfMonths
} from '../../utils/date';
import { simulationResult } from '../../utils/business';
import { FinancialPlanState } from '../../store/types';

type Props = {
	financialPlan: FinancialPlanState;
	updateAmount: (amount: string) => void;
	updateDate: (date: Date) => void;
};

const Calculator: React.FC<Props> = ({
	financialPlan: { amount, date },
	updateAmount,
	updateDate
}) => {
	const dispatch: Dispatch<any> = useDispatch();

	const addOne = () => {
		const add = addMonth(date);
		dispatch(updateDate(add));
	};

	const subOne = () => {
		const checkIfIsBefore = compareAsc(date, addMonth(new Date()));
		if (checkIfIsBefore < 1) return;
		const sub = subMonth(date);
		dispatch(updateDate(sub));
	};

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === 'ArrowLeft') {
			subOne();
		} else if (e.key === 'ArrowRight') {
			addOne();
		}
	};

	const handleUpdateAmount = (e: React.FormEvent<HTMLInputElement>) => {
		dispatch(updateAmount(e.currentTarget.value));
	};

	const numberOfMonths = React.useMemo(() => {
		return getNumberOfMonths(date);
	}, [date]);

	const monthlyInvestment = React.useMemo(() => {
		return simulationResult(amount, numberOfMonths);
	}, [amount, numberOfMonths]);

	return (
		<Container>
			<Header>
				<img src={House} />
				<div>
					<h2>Buy a house</h2>
					<p>Saving Goal</p>
				</div>
			</Header>
			<Content>
				<Inputs>
					<div>
						<AmountInput
							amount={amount}
							onChange={(e: React.FormEvent<HTMLInputElement>) =>
								handleUpdateAmount(e)
							}
						/>
					</div>
					<div>
						<DateInput
							add={addOne}
							sub={subOne}
							label={getLabel(date)}
							onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) =>
								handleKeyPress(e)
							}
						/>
					</div>
				</Inputs>
				<Result
					totalAmount={amount}
					numberOfMonths={numberOfMonths}
					monthlyResult={monthlyInvestment}
					date={getLabel(date)}
				/>
			</Content>
			<Button>Confirm</Button>
		</Container>
	);
};

export default Calculator;
