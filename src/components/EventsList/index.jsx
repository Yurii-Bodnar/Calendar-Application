import { useSelector } from "react-redux";
import EventsItem from "../EventsItem";
import { selectDate, selectEvents } from "../../redux/events/eventsSelectors";
import { dateConvert } from "../../utility/dateConvert";

import { Box } from "@mui/material";

const EventsList = () => {
  const events = useSelector(selectEvents);
  const date = useSelector(selectDate);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxHeight: 300,
        overflowY: "auto",
        mb: 2,
      }}
    >
      <EventsItem events={events} date={dateConvert(date)} />
    </Box>
  );
};

export default EventsList;
