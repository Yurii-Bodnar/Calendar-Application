import { Formik } from "formik";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { validate } from "../../utility/validate";
import {
  addEvents,
  updateEvent,
  updateModalCLose,
} from "../../redux/events/eventsSlice";
import { dateConvert } from "../../utility/dateConvert";
import {
  selectDate,
  selectEventForUpdate,
} from "../../redux/events/eventsSelectors";

const UpdateFormEvent = () => {
  const modalRoot = document.querySelector("#modal-root");
  const eventData = useSelector(selectEventForUpdate);
  const date = useSelector(selectDate);
  const dispatch = useDispatch();

  const closeModalHandler = () => {
    dispatch(updateModalCLose());
  };

  return createPortal(
    <div>
      <h2>Update Event</h2>
      <Formik
        initialValues={{
          id: eventData.id,
          title: eventData.title,
          time: eventData.time,
          description: eventData.description ? eventData.description : "",
          date,
        }}
        validate={(values) => validate(values)}
        onSubmit={(values) => {
          const dataEvent = {
            id: eventData.id,
            title: values.title,
            time: values.time,
            description: values.description,
          };
          dispatch(
            updateEvent({
              date: dateConvert(values.date),
              dataEvent,
            })
          );
          dispatch(updateModalCLose());
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
      <button onClick={closeModalHandler} type="button">
        X
      </button>
    </div>,
    modalRoot
  );
};

export default UpdateFormEvent;
