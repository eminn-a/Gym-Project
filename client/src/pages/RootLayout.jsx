import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { UserProvider } from "../context/authContext";
import { Outlet } from "react-router-dom";

const RouterLayout = () => {
  return (
    <UserProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </UserProvider>
  );
};

export default RouterLayout;
