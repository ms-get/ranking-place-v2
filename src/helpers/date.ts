export const getDateFormat = (date: string) => {
  const formatDate = new Date(date);
  return `${formatDate.getFullYear()}-${formatDate.getMonth() + 1}-${formatDate.getDate()}`;
};
