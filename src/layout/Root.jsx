import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../shared/Footer";

function Root() {
  return (
    <div className="max-w-[85%] mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  );
}

export default Root;
