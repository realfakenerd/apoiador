type WeekDay = Intl.DateTimeFormatOptions['weekday'];

export function formatDate(date: string | Date, weekday: WeekDay = 'short', locales = 'pt-br') {
	const formatter = new Intl.DateTimeFormat(locales, { weekday });
	return formatter.format(new Date(date));
}
