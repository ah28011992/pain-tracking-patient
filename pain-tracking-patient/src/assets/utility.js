const options = {
	year: "numeric",
	month: "long",
	day: "numeric",
	hour: "2-digit",
	minute: "2-digit",
	second: "2-digit",
	hour12: true,
	timeZone: "UTC",
};
const date = new Date();

const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

export { formattedDate };
