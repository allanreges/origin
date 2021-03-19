
export const simulationResult = (amount: string, numberOfMonths: number) => {
	const regex = new RegExp(',', 'g');
	const newAmount = Number(amount.replace(regex, ''));

	return newAmount / numberOfMonths;
};
