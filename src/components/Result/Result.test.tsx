import React from 'react';
import { mount } from 'enzyme';
import { expect } from '@jest/globals';
import Result from './';

type FormatedDate = {
	year: string;
	month: string;
};

describe('<Button />', () => {
	let component;

	const dateLabel: FormatedDate = {
		year: '2021',
		month: 'March'
	};

	const monthlyResult = 1000.23;
	const totalAmount = '45000.54';
	const numberOfMonths = 12;

	it('renders the result component', () => {
		component = mount(
			<Result
				date={dateLabel}
				totalAmount={totalAmount}
				monthlyResult={monthlyResult}
				numberOfMonths={numberOfMonths}
			/>
		);
		expect(component).toHaveLength(1);
	});

	it('displays the date prop', () => {
		component = mount(
			<Result
				date={dateLabel}
				totalAmount={totalAmount}
				monthlyResult={monthlyResult}
				numberOfMonths={numberOfMonths}
			/>
		);
		expect(component.find({ 'data-cy': 'date-label-result' }).text()).toEqual(
			'March 2021.'
		);
	});

	it('displays the monthly result prop formatted as money', () => {
		component = mount(
			<Result
				date={dateLabel}
				totalAmount={totalAmount}
				monthlyResult={monthlyResult}
				numberOfMonths={numberOfMonths}
			/>
		);
		expect(
			component
				.find({ 'data-cy': 'monthly-result' })
				.at(0)
				.text()
		).toEqual('$1,000.23');
	});

	it('displays the total amount prop formatted as money', () => {
		component = mount(
			<Result
				date={dateLabel}
				totalAmount={totalAmount}
				monthlyResult={monthlyResult}
				numberOfMonths={numberOfMonths}
			/>
		);
		expect(
			component
				.find({ 'data-cy': 'result-total-amount' })
				.at(0)
				.text()
		).toEqual('$45,000.54');
	});

  it('displays the total of months label', () => {
		component = mount(
			<Result
				date={dateLabel}
				totalAmount={totalAmount}
				monthlyResult={monthlyResult}
				numberOfMonths={numberOfMonths}
			/>
		);
		expect(
			component
				.find({ 'data-cy': 'number-of-months' })
				.at(0)
				.text()
		).toEqual('12 monthly deposits');
	});
});
