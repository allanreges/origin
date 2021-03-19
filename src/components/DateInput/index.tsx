import * as React from 'react';
import {
	Container,
	Input,
	Label,
	ArrowButtonLeft,
	ArrowButtonRight,
	Content
} from './styles';
import ArrowLeft from '../../assets/images/arrow-left.svg';
import ArrowRight from '../../assets/images/arrow-right.svg';

type FormatedDate = {
	year: string;
	month: string;
};

type Props = {
	onKeyDown: (e: React.KeyboardEvent) => void;
	label: FormatedDate;
	add: () => void;
	sub: () => void;
};

const DateInput: React.FC<Props> = ({
	onKeyDown,
	label: { month, year },
	add,
	sub
}) => {
	return (
		<>
			<Label>Reach goal by</Label>
			<Container data-cy="key-container" onKeyDown={onKeyDown}>
				<ArrowButtonLeft data-cy="sub-month" onClick={() => sub()}>
					<img src={String(ArrowLeft)} alt="arrow-left" />
				</ArrowButtonLeft>
				<ArrowButtonRight data-cy="add-month" onClick={() => add()}>
					<img src={String(ArrowRight)} alt="arrow-right" />
				</ArrowButtonRight>
				<Content>
					<p data-cy="simulation-date">
						<span>{month}</span>
						<br />
						{year}
					</p>
				</Content>
				<Input type="text" data-cy="date-input" />
			</Container>
		</>
	);
};

export default DateInput;
