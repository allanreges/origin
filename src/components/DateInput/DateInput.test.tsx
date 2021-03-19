import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from '@jest/globals';
import DateInput from './';

type FormatedDate = {
	year: string;
	month: string;
};

describe('<DateInput />', () => {
	let component;
	const add = jest.fn();
	const sub = jest.fn();
	const keyPress = jest.fn();

	const dateLabel: FormatedDate = {
		year: '2021',
		month: 'March'
	};

	it('renders date label', () => {
		component = shallow(
			<DateInput label={dateLabel} add={add} sub={sub} onKeyDown={keyPress} />
		);
		expect(component.find('p').text()).toEqual('March2021');
	});

	it('calls keydown with arrowleft', () => {
		component = mount(
			<DateInput label={dateLabel} add={add} sub={sub} onKeyDown={keyPress} />
		);
		component
			.find({ 'data-cy': 'date-input' })
			.at(0)
			.simulate('keydown', { key: 'ArrowLeft' });
		expect(keyPress).toBeCalled();
	});

	it('icalls keydown with arrowRight', () => {
		component = mount(
			<DateInput label={dateLabel} add={add} sub={sub} onKeyDown={keyPress} />
		);
		component
			.find({ 'data-cy': 'date-input' })
			.at(0)
			.simulate('keydown', { key: 'ArrowRight' });
		expect(keyPress).toBeCalled();
	});

	it('calls add when button rigth is clicked', () => {
		component = mount(
			<DateInput label={dateLabel} add={add} sub={sub} onKeyDown={keyPress} />
		);
		component
			.find({ 'data-cy': 'add-month' })
			.at(0)
			.simulate('click');
		expect(add).toBeCalled();
	});

	it('calls sub when button rigth is clicked', () => {
		component = mount(
			<DateInput label={dateLabel} add={add} sub={sub} onKeyDown={keyPress} />
		);
		component
			.find({ 'data-cy': 'sub-month' })
			.at(0)
			.simulate('click');
		expect(sub).toBeCalled();
	});
});
