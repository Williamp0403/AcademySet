import { Outlet } from "react-router-dom";
import { HeaderMain } from "../components/Headers/HeaderMain";

export function MainLayout() {
  return (
    <>
      <HeaderMain />
      <Outlet />
    </>
  );
}
