import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  date: dayjs(new Date()),
  id: uuidv4(),
  events: [],
  eventsForUpdate: null,
  eventInfo: {},
  isModalOpen: false,
  isUpdateModalOpen: false,
};
export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    fetchData(state, { payload }) {
      const data = JSON.parse(localStorage.getItem("events"));

      state.events = data ? data : [];
    },
    addEvents: (state, { payload }) => {
      const findDate = state.events.findIndex((s) => s.date === payload.date);
      if (findDate !== -1) {
        const newEvents = [...state.events];
        newEvents[findDate].events.push(payload.event);
        state.events = newEvents;
        localStorage.setItem("events", JSON.stringify(state.events));
      } else {
        state.events.push({ date: payload.date, events: [payload.event] });
        localStorage.setItem("events", JSON.stringify(state.events));
      }
    },
    setDate(state, action) {
      state.date = action.payload;
    },
    modalOpen(state, _) {
      state.isModalOpen = true;
    },
    modalClose(state, _) {
      state.isModalOpen = false;
    },
    setEventForUpdate(state, { payload }) {
      state.eventsForUpdate = payload;
    },

    removeEvent(state, { payload }) {
      const findDate = state.events.findIndex((el) => el.date === payload.date);
      const newEvents = [...state.events][findDate].events.filter(
        (el) => el.id !== payload.id
      );
      state.events[findDate].events = newEvents;
      localStorage.setItem("events", JSON.stringify(state.events));
    },
    updateEvent(state, { payload }) {
      const findDate = state.events.findIndex((el) => el.date === payload.date);

      const newEvents = [...state.events][findDate].events.map((el) => {
        if (el.id === payload.dataEvent.id) {
          const { title, time, description } = payload.dataEvent;
          const updateEvent = { id: uuidv4(), title, time, description };
          return (el = updateEvent);
        }
        return el;
      });
      state.events[findDate] = { date: payload.date, events: [...newEvents] };
      state.eventsForUpdate = {};
      localStorage.setItem("events", JSON.stringify(state.events));
    },
    getInfo(state, { payload }) {
      state.eventInfo = payload;
    },
  },
});
export const {
  addEvents,
  setDate,
  modalOpen,
  modalClose,
  setFilteredEvents,
  deleteItemFilteredEvents,
  removeEvent,
  updateEvent,
  setEventForUpdate,
  fetchData,
  getInfo,
} = eventsSlice.actions;
export const eventsReducer = eventsSlice.reducer;
