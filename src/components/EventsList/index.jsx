import { useSelector } from "react-redux";
import EventsItem from "../EventsItem";
import { selectDate, selectEvents } from "../../redux/events/eventsSelectors";
import { dateConvert } from "../../utility/dateConvert";

const EventsList = () => {
  const events = useSelector(selectEvents);
  const date = useSelector(selectDate);

  return (
    <ul>
      <EventsItem events={events} date={dateConvert(date)} />
    </ul>
  );
};

export default EventsList;
