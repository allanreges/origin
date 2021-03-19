import { expect } from '@jest/globals';
import { simulationResult } from './business';

describe('Tests the simulation rule', () => {
	it('should return the correct value', () => {
		const date = simulationResult('10000.50', 2);
		expect(date).toBe(5000.25);
	});
});