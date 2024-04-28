import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <>
      <Header></Header>
      <div>
        <Toaster />
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;
