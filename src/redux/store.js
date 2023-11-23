import { configureStore } from "@reduxjs/toolkit";
import { eventsReducer } from "./events/eventsSlice";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";

// const eventsPersistConfig = {
//   key: "events",
//   storage,
//   whitelist: ["events"],
// };
// const persistEventsReducer = persistReducer(eventsPersistConfig, eventsReducer);
export const store = configureStore({
  reducer: { events: eventsReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
