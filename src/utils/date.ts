import {
	addMonths,
	differenceInCalendarMonths,
	subMonths,
	intlFormat
} from 'date-fns';

export const addMonth = (date: Date) => addMonths(date, 1);

export const subMonth = (date: Date) => subMonths(date, 1);

export const getLabel = (date: Date) => {
	const year = intlFormat(
		date,
		{
			year: 'numeric'
		},
		{
			locale: 'en-US'
		}
	);
	const month = intlFormat(
		date,
		{
			month: 'long'
		},
		{
			locale: 'en-US'
		}
	);

	return {
		year,
		month
	};
};

export const getNumberOfMonths = (date: Date) =>
	differenceInCalendarMonths(date, new Date());
