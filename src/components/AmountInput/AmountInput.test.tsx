import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from '@jest/globals';
import AmountInput from './';

describe('<AmountInput />', () => {
	let component;
	const amount = '1000.50';
	const updateAmount = jest.fn();

	it('renders amount input with value', () => {
		component = shallow(
			<AmountInput amount={amount} onChange={updateAmount} />
		);
		expect(
			component.find({ 'data-cy': 'input-amount' }).get(0).props.value
		).toEqual('1000.50');
	});

	it('call onChange function', () => {
		component = shallow(
			<AmountInput amount={amount} onChange={updateAmount} />
		);

		component
			.find({ 'data-cy': 'input-amount' })
			.at(0)
			.simulate('change');

		expect(updateAmount).toBeCalled();
	});
});
