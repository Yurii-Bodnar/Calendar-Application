export const dateConvert = (date) => {
  return (
    date.$d.getDate().toString() +
    "." +
    date.$d.getMonth() +
    "." +
    date.$d.getFullYear()
  );
};
