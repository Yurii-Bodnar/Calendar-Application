import React from "react";
import { useDispatch } from "react-redux";
import {
  getInfo,
  removeEvent,
  setEventForUpdate,
  modalOpen,
} from "../../redux/events/eventsSlice";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
import { convertDate } from "../../utility/dateConvert";
import { Box, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
const EventsItem = ({ events, date }) => {
  const dispatch = useDispatch();
  const eventsData = events?.find((e) => e.date === date);
  const navigate = useNavigate();

  const deleteHandler = (e) => {
    const id = e.currentTarget.id;
    dispatch(removeEvent({ id, date }));
  };

  const updateHandler = (e) => {
    dispatch(modalOpen());
    dispatch(setEventForUpdate(e));
  };

  const infoHandler = (e) => {
    dispatch(getInfo(eventsData));
    navigate(`/${date}`);
  };

  return (
    <>
      {eventsData?.events?.length
        ? eventsData?.events?.map((e) => (
            <Box
              key={e.id}
              sx={{
                display: "grid",
                alignItems: "center",
                gridTemplateColumns: "1fr 1fr 1fr",
              }}
            >
              <Typography>{e.title}</Typography>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {convertDate(e.time)}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <IconButton id={e.id} type="button" onClick={infoHandler}>
                  <InfoIcon />
                </IconButton>
                <IconButton
                  id={e.id}
                  type="button"
                  onClick={() => updateHandler(e)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton id={e.id} onClick={deleteHandler} type="button">
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Box>
          ))
        : null}
    </>
  );
};

export default EventsItem;
