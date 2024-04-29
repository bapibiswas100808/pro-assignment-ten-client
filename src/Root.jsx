import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Toaster } from "react-hot-toast";
import { ThemeContext } from "./Components/ThemeContext/ThemeContext";
import { useState } from "react";

const Root = () => {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`App ${theme}`}>
          <Header></Header>
          <div>
            <Toaster />
          </div>
          <div className="outlet">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default Root;
