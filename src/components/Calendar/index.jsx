import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useDispatch, useSelector } from "react-redux";
import { selectDate } from "../../redux/events/eventsSelectors";
import { setDate } from "../../redux/events/eventsSlice";
import { DayCalendarSkeleton } from "@mui/x-date-pickers";

const Calendar = () => {
  const date = useSelector(selectDate);
  const dispatch = useDispatch();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        value={date}
        onChange={(newValue) => {
          dispatch(setDate(newValue));
        }}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
