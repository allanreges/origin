import { getLabel } from './date';
import { expect } from '@jest/globals';

describe('Tests date utils', () => {
	it('should return a valid label object', () => {
		const date = getLabel(new Date('01/01/2021'));
		expect(date).toMatchObject({
			month: 'January',
			year: '2021'
		});
	});
});
