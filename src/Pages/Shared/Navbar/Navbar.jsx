import { Link, NavLink } from "react-router-dom";
import { GoPasskeyFill } from "react-icons/go";
import { BsCart4 } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

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
          to="/order/salad"
          className={({ isActive }) =>
            `${isActive && "text-[#EEFF25]"} text-xl font-bold uppercase`
          }
        >
          Our shop
        </NavLink>
      </li>
      <li className="relative">
        <Link to="/dashboard/mycart">
          <div>
            <BsCart4 className="text-2xl w-7 h-7 bg-green-600 rounded-full" />
            <p className="bg-red-500 text-lg w-6 h-6 text-center rounded-full absolute right-0 bottom-0">
              {cart?.length || 0}
            </p>
          </div>
        </Link>
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
          {user ? (
            <>
              <Link
                onClick={handleLogOut}
                className="py-2 px-4 text-xl font-bold uppercase"
              >
                <div className="flex justify-center items-center gap-2">
                  <p>Sign Out</p>
                  {user.photoURL ? (
                    <img
                      src={user?.photoURL}
                      alt=""
                      className="w-14 h-14 rounded-full object-cover"
                    />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="42"
                      viewBox="0 0 45 42"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M37.8511 35.7854C40.0692 33.8885 41.8362 31.5977 43.043 29.0546C44.2497 26.5115 44.8706 23.7701 44.867 21C44.867 9.78125 34.8753 0.6875 22.5488 0.6875C10.2222 0.6875 0.230484 9.78125 0.230484 21C0.226962 23.7701 0.847765 26.5115 2.05452 29.0546C3.26127 31.5977 5.02832 33.8885 7.24643 35.7854C11.3826 39.3414 16.859 41.3195 22.5488 41.3125C28.2386 41.3195 33.7149 39.3414 37.8511 35.7854ZM9.14635 33.1083C10.7534 31.2784 12.7928 29.8015 15.1131 28.7873C17.4333 27.7731 19.9748 27.2477 22.5488 27.25C25.1227 27.2477 27.6642 27.7731 29.9844 28.7873C32.3047 29.8015 34.3441 31.2784 35.9512 33.1083C34.1978 34.7202 32.1103 35.9992 29.8096 36.8711C27.5089 37.743 25.0409 38.1904 22.5488 38.1875C20.0566 38.1904 17.5886 37.743 15.2879 36.8711C12.9873 35.9992 10.8997 34.7202 9.14635 33.1083ZM31.1327 14.75C31.1327 16.822 30.2283 18.8091 28.6185 20.2743C27.0087 21.7394 24.8254 22.5625 22.5488 22.5625C20.2722 22.5625 18.0888 21.7394 16.479 20.2743C14.8692 18.8091 13.9648 16.822 13.9648 14.75C13.9648 12.678 14.8692 10.6909 16.479 9.22573C18.0888 7.7606 20.2722 6.9375 22.5488 6.9375C24.8254 6.9375 27.0087 7.7606 28.6185 9.22573C30.2283 10.6909 31.1327 12.678 31.1327 14.75Z"
                        fill="white"
                      />
                    </svg>
                  )}
                </div>
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="py-2 px-4 text-xl font-bold uppercase"
              >
                <div className="flex justify-center items-center gap-2">
                  Login <GoPasskeyFill size={24} className="text-[#EEFF25]" />
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
