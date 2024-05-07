const padZero = (number) => {
  return number.toString().padStart(2, '0');
};

export const convertTime = (date: string) => {
  const data = new Date(date);

  const hours = padZero(data.getHours());
  const minutes = padZero(data.getMinutes());

  return `${hours}:${minutes}`;
};
