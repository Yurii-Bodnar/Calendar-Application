import { v4 as uuidv4 } from "uuid";
import React from "react";
import { useDispatch } from "react-redux";
import { removeEvent, updateModalOpen } from "../../redux/events/eventsSlice";

const EventsItem = ({ events, date }) => {
  const dispatch = useDispatch();
  const currentData = events.find((e) => e.date === date);

  const deleteHandler = (e) => {
    const id = e.currentTarget.id;
    dispatch(removeEvent({ id, date }));
  };

  const updateHandler = (e) => {
    const id = e.currentTarget.id;
    dispatch(updateModalOpen({ date, id }));
  };
  return (
    <>
      {currentData?.events?.length
        ? currentData.events.map((e) => (
            <li key={e.id}>
              <h2>{e.title}</h2>
              <p>{e.time}</p>
              <p>{e.description}</p>
              <button id={e.id} type="button" onClick={deleteHandler}>
                delete
              </button>
              <button id={e.id} onClick={updateHandler} type="button">
                update
              </button>
            </li>
          ))
        : null}
    </>
  );
};

export default EventsItem;
