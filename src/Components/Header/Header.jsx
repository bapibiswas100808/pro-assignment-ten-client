import { Link, NavLink } from "react-router-dom";

const Header = () => {
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
    <div className="bg-[#3CB371]">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#8B4513] rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link
            to="/"
            className="text-lg lg:text-xl text-white bg-[#8B4513] px-2 lg:px-3 py-2 rounded-lg"
          >
            JUWoody Art
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-5 px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end space-x-4">
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
      </div>
    </div>
  );
};

export default Header;
