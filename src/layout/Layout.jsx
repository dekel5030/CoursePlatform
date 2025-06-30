import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar/Navbar";
import Carousel from "../components/Carousel/Carousel";

const Layout = () => {
  const location = useLocation();

  const showCarousel = !location.pathname.startsWith("/checkout");

  return (
    <>
      <NavBar />
      {showCarousel && <Carousel />}
      <Outlet />
    </>
  );
};

export default Layout;
