import { Outlet } from "react-router-dom";
import { HeaderSecondary } from "../components/Headers/HeaderSecondary";

export function MinimalLayout() {
  return (
      <>
        <HeaderSecondary />
        <Outlet />
      </>
    );
}
