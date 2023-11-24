export const dateConvert = (date) => {
  return (
    date.$d.getDate().toString() +
    "-" +
    date.$d.getMonth() +
    "-" +
    date.$d.getFullYear()
  );
};
export const convertDate = (date) => {
  const newDate = new Date(date);
  return (
    newDate.getDate().toString() +
    "-" +
    newDate.getMonth() +
    "-" +
    newDate.getFullYear()
  );
};
