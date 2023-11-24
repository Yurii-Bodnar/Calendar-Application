export const selectDate = (state) => state.events.date;
export const selectEvents = (state) => state.events.events;
export const selectIsModalOpen = (state) => state.events.isModalOpen;
export const selectFilteredEvents = (state) => state.events.filteredEventsByDay;
export const selectIsUpdateModalOpen = (state) =>
  state.events.isUpdateModalOpen;
export const selectEventForUpdate = (state) => state.events.eventsForUpdate;
export const selectEventInfo = (state)=>state.events.eventInfo
