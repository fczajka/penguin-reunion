export const countDays = (difference: number): number => {
  return Math.floor(difference / (1000 * 60 * 60 * 24));
};

export const countHours = (difference: number): number => {
  return Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
};

export const countMinutes = (difference: number): number => {
  return Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
};

export const countSeconds = (difference: number): number => {
  return Math.floor((difference % (1000 * 60)) / 1000);
};
