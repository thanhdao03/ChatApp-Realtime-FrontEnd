import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import MainContainer from "./MainContainer";

function AppLayout() {
  return (
    <MainContainer>
      <Navbar />
      <Outlet />
    </MainContainer>
  );
}

export default AppLayout;
