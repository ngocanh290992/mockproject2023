export const formatDate = (dateTime) => {
  const m = new Date(dateTime);
  const dateString = m.getUTCFullYear() + "-" + (m.getUTCMonth() + 1) + "-" + m.getUTCDate();
  return dateString;
}

export const getImageName = (pathImage) => {
  const array = pathImage.split("\\");
  const imageName = array[array.length - 1];
  return imageName;
};