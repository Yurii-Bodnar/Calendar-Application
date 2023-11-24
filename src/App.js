import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { ThemeProvider } from "@mui/material";
import theme from "./assets/theme";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CircularIndeterminate from "./components/Preloader";

const HomePage = lazy(() => import("./pages/HomePage"));
const DetailsPage = lazy(() => import("./pages/DetailsPage"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Suspense fallback={<CircularIndeterminate />}></Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path={"/:date"} element={<DetailsPage />} />
          </Route>
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
