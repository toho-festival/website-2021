export const parseTime = (diff: number) => {
  const days    = Math.floor(diff / 86400000);
  diff -= days * 86400000;
  const hours   = Math.floor(diff / 3600000);
  diff -= hours * 3600000;
  const minutes = Math.floor(diff / 60000);
  diff -= minutes * 60000;
  const seconds = Math.floor(diff / 1000);
  return { days, hours, minutes, seconds };
};

