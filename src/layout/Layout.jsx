import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/Navbar";
import Carousel from "../components/Carousel/Carousel";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Carousel />
      <Outlet />
    </>
  );
};

export default Layout;
