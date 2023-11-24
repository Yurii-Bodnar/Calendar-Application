import { useDispatch, useSelector } from "react-redux";
import EventsList from "../EventsList";
import { selectDate } from "../../redux/events/eventsSelectors";
import { dateConvert } from "../../utility/dateConvert";
import { modalOpen } from "../../redux/events/eventsSlice";

import AddIcon from "@mui/icons-material/Add";

import { Box, Button, Typography } from "@mui/material";

const SideBarEvents = () => {
  const date = useSelector(selectDate);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(modalOpen());
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        px: { xs: 0, sm: 5, md: 0 },
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 700,
        }}
      >
        Events for: {dateConvert(date)}
      </Typography>
      <EventsList />
      <Box>
        <Button
          startIcon={<AddIcon />}
          variant="contained"
          size="small"
          type="button"
          onClick={handleClick}
        >
          Add event
        </Button>
      </Box>
    </Box>
  );
};

export default SideBarEvents;
