import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createPortal } from "react-dom";
import { addEvents, modalClose } from "../../redux/events/eventsSlice";
import { v4 as uuidv4 } from "uuid";
import { selectDate, selectEvents } from "../../redux/events/eventsSelectors";
import { dateConvert } from "../../utility/dateConvert";
import { validate } from "../../utility/validate";

const ModalFormAddEvents = () => {
  const date = useSelector(selectDate);
  const modalRoot = document.querySelector("#modal-root");
  const dispatch = useDispatch();

  const closeModalHandler = () => {
    dispatch(modalClose());
  };

  return createPortal(
    <div>
      <h2>Add Event</h2>
      <Formik
        initialValues={{
          id: "",
          title: "",
          time: "",
          description: "",
          date,
        }}
        validate={(values) => validate(values)}
        onSubmit={(values) => {
          const dataEvent = {
            id: uuidv4(),
            title: values.title,
            // date: dateConvert(values.date),
            time: values.time,
            description: values.description,
          };
          dispatch(
            addEvents({
              date: dateConvert(values.date),
              event: dataEvent,
            })
          );
          dispatch(modalClose());
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            {errors.time && touched.time && errors.time}
            <input
              type="time"
              name="time"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.time}
            />
            {errors.time && touched.time && errors.time}
            <input
              type="description"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
      <button onClick={closeModalHandler} type="button">X</button>
    </div>,
    modalRoot
  );
};

export default ModalFormAddEvents;
