import React from 'react';
import { mount } from 'enzyme';
import { expect } from '@jest/globals';
import Button from './';

describe('<Button />', () => {
	let component;

	it('renders child node(s)', () => {
		component = mount(<Button>Test</Button>);
		expect(component.text()).toEqual('Test');
	});
});
