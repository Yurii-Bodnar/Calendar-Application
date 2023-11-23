export const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = "Required";
  }
  if (!values.time) {
    errors.time = "Required";
  }

  return errors;
};
