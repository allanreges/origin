import * as React from 'react';
import { Container, Header, Bottom, Amount, BottomAmount } from './styles';

type FormatedDate = {
	year: string;
	month: string;
};

type Props = {
	monthlyResult: number;
	date: FormatedDate;
	totalAmount: string;
	numberOfMonths: number;
};

const Result: React.FC<Props> = ({
	monthlyResult,
	date: { month, year },
	totalAmount,
	numberOfMonths
}) => {
	return (
		<Container>
			<Header>
				<h2>Monthly amount</h2>
				<Amount
					value={monthlyResult}
					displayType={'text'}
					prefix={'$'}
					thousandSeparator={true}
					decimalScale={2}
					data-cy="monthly-result"
				/>
			</Header>
			<Bottom>
				<p>
					You’re planning{' '}
					<span data-cy="number-of-months">{`${numberOfMonths} monthly deposits`}</span>{' '}
					to reach your{' '}
					<BottomAmount
						value={totalAmount}
						displayType={'text'}
						prefix={'$'}
						thousandSeparator={true}
						decimalScale={2}
						data-cy="result-total-amount"
					/>{' '}
					goal by <span data-cy="date-label-result">{`${month} ${year}.`}</span>
				</p>
			</Bottom>
		</Container>
	);
};

export default Result;
