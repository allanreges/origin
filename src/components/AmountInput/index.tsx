import * as React from 'react';
import { Container, Input, Icon, Label } from './styles';
import Dollar from '../../assets/images/dollar.svg';

type Props = {
	amount: string;
	onChange: (e: React.FormEvent<HTMLInputElement>) => void;
};

const AmountInput: React.FC<Props> = ({ amount, onChange }) => {
	return (
		<>
			<Label>Total Amount</Label>
			<Container>
				<Icon src={Dollar} alt="dollar" />
				<Input
					onChange={(e: React.FormEvent<HTMLInputElement>) => onChange(e)}
					value={amount}
					thousandSeparator={true}
					allowNegative={false}
					decimalScale={2}
					prefix={''}
					data-cy="input-amount"
				/>
			</Container>
		</>
	);
};

export default AmountInput;
