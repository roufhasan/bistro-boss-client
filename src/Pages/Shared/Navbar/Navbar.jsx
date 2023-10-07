import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive && "text-[#EEFF25]"} text-xl font-bold uppercase`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${isActive && "text-[#EEFF25]"} text-xl font-bold uppercase`
          }
        >
          Contact us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `${isActive && "text-[#EEFF25]"} text-xl font-bold uppercase`
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            `${isActive && "text-[#EEFF25]"} text-xl font-bold uppercase`
          }
        >
          Our menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            `${isActive && "text-[#EEFF25]"} text-xl font-bold uppercase`
          }
        >
          Our shop
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar py-6 px-8 bg-[#151515] bg-opacity-50 text-white fixed z-10 backdrop-blur-md">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <div className="uppercase">
            <p className="font-black text-3xl">Bistro Boss</p>
            <p className="font-bold tracking-[9px] text-2xl">Restaurant</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
