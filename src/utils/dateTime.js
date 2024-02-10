const DAY_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const fillZeroGaps = (value) => {
  return Number(value) < 9 ? "0" + value : value;
};

export const getCurrentDateAndTime = () => {
  const date = new Date();
  const h = fillZeroGaps(date.getHours());
  const m = fillZeroGaps(date.getMinutes());
  const dayStr = DAY_OF_WEEK[date.getDay()];
  const monthStr = MONTHS[date.getMonth()];
  return `${dayStr}, ${date.getDate()} ${monthStr} ${h}:${m}`;
};
