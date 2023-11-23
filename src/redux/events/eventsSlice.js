import { createSlice, current } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  date: dayjs(new Date()),
  id: uuidv4(),
  events: [],
  eventsForUpdate: {},
  isModalOpen: false,
  isUpdateModalOpen: false,
};
export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvents: (state, { payload }) => {
      const findDate = state.events.findIndex((s) => s.date === payload.date);
      if (findDate !== -1) {
        const newEvents = [...state.events];
        newEvents[findDate].events.push(payload.event);
        state.events = newEvents;
      } else {
        state.events.push({ date: payload.date, events: [payload.event] });
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
    updateModalOpen(state, { payload }) {
      state.isUpdateModalOpen = true;
      const findDate = state.events.findIndex((el) => el.date === payload.date);
      const eventData = [...state.events][findDate].events.find(
        (el) => el.id === payload.id
      );
      state.eventsForUpdate = eventData;
      state.isUpdateModalOpen = true;
    },
    updateModalCLose(state, _) {
      state.isUpdateModalOpen = false;
    },
    removeEvent(state, { payload }) {
      const findDate = state.events.findIndex((el) => el.date === payload.date);
      const newEvents = [...state.events][findDate].events.filter(
        (el) => el.id !== payload.id
      );
      state.events[findDate].events = newEvents;
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
  updateModalOpen,
  updateModalCLose,
} = eventsSlice.actions;
export const eventsReducer = eventsSlice.reducer;
