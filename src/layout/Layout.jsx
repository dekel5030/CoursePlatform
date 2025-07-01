import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar/Navbar";
import Carousel from "../components/Carousel/Carousel";
import { ShoppingCartProvider } from "../context/ShoppingCartProvider.jsx";
const Layout = () => {
  const location = useLocation();

  const showCarousel = !location.pathname.startsWith("/checkout");

  return (
    <>
      <ShoppingCartProvider>
        <NavBar />
        {showCarousel && <Carousel />}
        <Outlet />
      </ShoppingCartProvider>
    </>
  );
};

export default Layout;
