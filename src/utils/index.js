export const formatDate = (dateTime) => {
  const m = new Date(dateTime);
  const dateString = m.getUTCFullYear() + "-" + (m.getUTCMonth() + 1) + "-" + m.getUTCDate();
  return dateString;
}