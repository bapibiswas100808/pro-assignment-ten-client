import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { Tooltip } from "react-tooltip";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { MdOutlineDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const { theme, setTheme } = useContext(ThemeContext);
  // Theme Selection
  const handleMode = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navLinks = (
    <>
      <li className="text-white text-lg">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-white text-lg">
        <NavLink to="/allCraft">All Art & craft Items</NavLink>
      </li>
      <li className="text-white text-lg">
        <NavLink to="addCraft">Add Craft Item</NavLink>
      </li>
      <li className="text-white text-lg">
        <NavLink to="craftList">My Art&Craft List</NavLink>
      </li>
    </>
  );
  return (
    <div className=" header-area">
      <div className="navbar max-w-[1170px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-[#8B4513] rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link
            to="/"
            className="text-md md:text-xl lg:text-xl text-white bg-[#8B4513] px-2 lg:px-3 py-2 rounded-lg font-bold"
          >
            <h2>JUWoody Art</h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-5 px-1">{navLinks}</ul>
        </div>
        {/* Dark/light switch */}
        <div className="pl-1 lg:pl-3">
          <div className="switch">
            <div className="theme-button text-2xl" onClick={handleMode}>
              <i className="text-white">
                {theme === "light" ? (
                  <BsFillSunFill className="fs-5" />
                ) : (
                  <MdOutlineDarkMode className="fs-5" />
                )}
              </i>
            </div>
          </div>
        </div>
        <div className="navbar-end space-x-4">
          {user ? (
            <div className="flex items-center gap-3">
              <a
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user?.displayName}
                data-tooltip-place="left"
              >
                <img
                  className="max-h-[40px] rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
              </a>
              <Tooltip id="my-tooltip" />
              <Link
                to="/"
                onClick={handleLogOut}
                className="py-2 px-2 lg:px-4 rounded-lg bg-[#8B4513] text-white border-0 hover:bg-primary"
              >
                Log Out
              </Link>
            </div>
          ) : (
            <div className="flex gap-4 items-center">
              <Link
                to="/register"
                className="py-2 px-2 lg:px-4 rounded-lg bg-[#8B4513] text-white border-0 hover:bg-primary"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="py-2 px-2 lg:px-4 rounded-lg bg-[#8B4513] text-white border-0 hover:bg-primary"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
