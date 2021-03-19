/* eslint-disable no-undef */
describe('Test Calculator', () => {
	it('Tests the result of the simulation', () => {
		cy.visit('/');
		cy.get('[data-cy=input-amount]').type('35000.54');
		cy.get(`[data-cy="add-month"]`).click();
		cy.get(`[data-cy="monthly-result"]`).should('have.text', '$17,500.27');
	});

	it('Tests if the user can calculate the simulation using keys', () => {
		cy.visit('/');
		cy.get('[data-cy=input-amount]').type('35000.54');
		for (let n = 0; n < 5; n++) {
			cy.get(`[data-cy="date-input"]`).type('{rightArrow}');
		}
		for (let n = 0; n < 3; n++) {
			cy.get(`[data-cy="date-input"]`).type('{leftArrow}');
		}
		cy.get(`[data-cy="monthly-result"]`).should('have.text', '$11,666.85');
	});

	it('Tests if the results and labels being displayed are correct', () => {
		cy.visit('/');
		cy.get('[data-cy=input-amount]').type('10000.34');
		for (let n = 0; n < 5; n++) {
			cy.get(`[data-cy="add-month"]`).click();
		}
		cy.get(`[data-cy="monthly-result"]`).should('have.text', '$1,666.72');
		cy.get(`[data-cy="number-of-months"]`).should(
			'have.text',
			'6 monthly deposits'
		);
		cy.get(`[data-cy="result-total-amount"]`).should('have.text', '$10,000.34');
		cy.get(`[data-cy="date-label-result"]`).should(
			'have.text',
			'September 2021.'
		);
	});
});
