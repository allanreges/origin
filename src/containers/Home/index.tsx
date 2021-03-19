/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import { Title } from './styles';
import Calculator from '../Calculator';
import { useSelector, shallowEqual } from 'react-redux';
import { FinancialPlanState } from '../../store/types';
import { updateAmount, updateDate } from '../../store/actionCreators';

const Home: React.FC = () => {
	const financialPlan: FinancialPlanState = useSelector(
		(state: FinancialPlanState) => state,
		shallowEqual
	);
	return (
		<>
			<Title>
				Let's plan your <span>saving goal.</span>
			</Title>
			<Calculator
				financialPlan={financialPlan}
				updateAmount={updateAmount}
				updateDate={updateDate}
			/>
		</>
	);
};

export default Home;
