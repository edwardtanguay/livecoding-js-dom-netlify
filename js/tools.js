export const capitalizeFirstCharacter = (text) => {
	return text.charAt(0).toUpperCase() + text.slice(1);
}

export const getTodaysDate = () => {
	const currentDate = new Date();
	const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
	return currentDate.toLocaleDateString('en-us', options);
}