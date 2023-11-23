import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./utility/globalStyles";
import { StyledEngineProvider } from "@mui/material";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <StyledEngineProvider injectFirst>
        <GlobalStyle />
        <App />
      </StyledEngineProvider>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
