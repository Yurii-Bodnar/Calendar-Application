import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import CircularIndeterminate from "../components/Preloader";

const Layout = () => {
  return (
    <Suspense fallback={<CircularIndeterminate />}>
      <Outlet />
    </Suspense>
  );
};
export default Layout;
