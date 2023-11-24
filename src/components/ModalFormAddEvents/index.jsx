import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  addEvents,
  modalClose,
  updateEvent,
  setEventForUpdate,
} from "../../redux/events/eventsSlice";
import { v4 as uuidv4 } from "uuid";
import {
  selectDate,
  selectEventForUpdate,
} from "../../redux/events/eventsSelectors";
import { dateConvert } from "../../utility/dateConvert";
import { validate } from "../../utility/validate";
import Modal from "../Modal";
import { selectIsModalOpen } from "../../redux/events/eventsSelectors";
import { Box, Button, TextField } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";

const defaultValues = {
  id: "",
  title: "",
  time: "",
  description: "",
  date: new Date(),
};

const ModalFormAddEvents = () => {
  const date = useSelector(selectDate);
  const eventData = useSelector(selectEventForUpdate);

  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectIsModalOpen);

  const isEditMode = !!eventData;

  const initialValues = eventData
    ? {
        id: eventData.id,
        title: eventData.title,
        time: eventData.time,
        description: eventData.description,
        date: date,
      }
    : {
        ...defaultValues,
        date: date,
      };

  const handleSubmit = (values) => {
    if (isEditMode) {
      const dataEvent = {
        id: values?.id,
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
    } else {
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
    }
    dispatch(setEventForUpdate(null));
    dispatch(modalClose());
  };

  const handleClose = () => {
    dispatch(setEventForUpdate(null));
    dispatch(modalClose());
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={handleClose}
      title={isEditMode ? "Update event" : "Create event"}
    >
      <Formik
        initialValues={initialValues}
        validate={(values) => validate(values)}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          /* and other goodies */
        }) => (
          <Box
            component={Form}
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box
              sx={{
                height: 80,
              }}
            >
              <TextField
                sx={{
                  width: 1,
                }}
                label="Title"
                type="text"
                name="title"
                error={errors.title}
                helperText={errors.title === "" ? "" : errors.title}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
            </Box>
            <Box
              sx={{
                height: 80,
              }}
            >
              <TimePicker
                sx={{
                  width: 1,
                }}
                label="Time"
                name="time"
                error={errors?.time}
                views={["hours", "minutes"]}
                format="hh:mm"
                slotProps={{
                  textField: {
                    helperText: errors.time === "" ? "" : errors.time,
                  },
                }}
                onChange={(value) => {
                  setFieldValue("time", Date.parse(value));
                }}
                onBlur={handleBlur}
                value={values.time}
              />
            </Box>
            <TextField
              rows={3}
              multiline
              label="Description"
              type="description"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            <Box sx={{ display: "flex", gap: 2, justifyContent: "end" }}>
              <Button type="submit" variant="contained" disabled={isSubmitting}>
                {isEditMode ? "Save" : "Create"}
              </Button>
              <Button type="button" onClick={handleClose} variant="outlined">
                Cancel
              </Button>
            </Box>
          </Box>
        )}
      </Formik>
    </Modal>
  );
};

export default ModalFormAddEvents;
