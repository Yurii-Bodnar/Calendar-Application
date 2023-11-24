import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./utility/globalStyles";
import { StyledEngineProvider } from "@mui/material";
import {  store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <GlobalStyle />
        <BrowserRouter basename="/Calendar-Application">
          <App />
        </BrowserRouter>
      </StyledEngineProvider>
    </Provider>
  </React.StrictMode>
);
