import React from 'react';
import { mount } from 'enzyme';
import { expect } from '@jest/globals';
import Header from './';

describe('<Header />', () => {
	let component;

	it('renders the Header', () => {
		component = mount(<Header />);
		expect(component).toHaveLength(1)
	});
});
