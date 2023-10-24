import { NavLink, Outlet } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { ImSpoonKnife } from "react-icons/im";
import { FaBars } from "react-icons/fa6";
import { HiShoppingBag } from "react-icons/hi";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { TbMessageStar } from "react-icons/tb";
import {
  FaList,
  FaBook,
  FaUsers,
  FaHome,
  FaCalendarAlt,
  FaWallet,
  FaShoppingCart,
} from "react-icons/fa";

const Dashboard = () => {
  const adminNavOptions = (
    <>
      <NavLink
        to="/dashboard/"
        className={({ isActive }) =>
          `${
            isActive && "text-white font-bold"
          } capitalize font-medium flex items-center gap-3`
        }
      >
        <AiFillHome size={24} /> Admin home
      </NavLink>
      <NavLink
        to="/dashboard/"
        className={({ isActive }) =>
          `${
            isActive && "text-white font-bold"
          } capitalize font-medium flex items-center gap-3`
        }
      >
        <ImSpoonKnife size={24} /> Add items
      </NavLink>
      <NavLink
        to="/dashboard/"
        className={({ isActive }) =>
          `${
            isActive && "text-white font-bold"
          } capitalize font-medium flex items-center gap-3`
        }
      >
        <FaList size={24} /> Manage items
      </NavLink>
      <NavLink
        to="/dashboard/"
        className={({ isActive }) =>
          `${
            isActive && "text-white font-bold"
          } capitalize font-medium flex items-center gap-3`
        }
      >
        <FaBook size={24} /> Manage bookings
      </NavLink>
      <NavLink
        to="/dashboard/"
        className={({ isActive }) =>
          `${
            isActive && "text-white font-bold"
          } capitalize font-medium flex items-center gap-3`
        }
      >
        <FaUsers size={24} /> All users
      </NavLink>
    </>
  );

  const userNavOptiosn = (
    <>
      <NavLink
        to="/dashboard/home"
        className={({ isActive }) =>
          `${
            isActive && "text-white font-bold"
          } capitalize font-medium flex items-center gap-3`
        }
      >
        <AiFillHome size={24} /> User home
      </NavLink>
      <NavLink
        to="/dashboard/reservation"
        className={({ isActive }) =>
          `${
            isActive && "text-white font-bold"
          } capitalize font-medium flex items-center gap-3`
        }
      >
        <FaCalendarAlt size={24} /> Reservation
      </NavLink>
      <NavLink
        to="/dashboard/history"
        className={({ isActive }) =>
          `${
            isActive && "text-white font-bold"
          } capitalize font-medium flex items-center gap-3`
        }
      >
        <FaWallet size={24} /> Payment history
      </NavLink>
      <NavLink
        to="/dashboard/mycart"
        className={({ isActive }) =>
          `${
            isActive && "text-white font-bold"
          } capitalize font-medium flex items-center gap-3`
        }
      >
        <FaShoppingCart size={24} /> My cart
      </NavLink>
      <NavLink
        to="/dashboard/review"
        className={({ isActive }) =>
          `${
            isActive && "text-white font-bold"
          } capitalize font-medium flex items-center gap-3`
        }
      >
        <TbMessageStar size={24} /> Add review
      </NavLink>
      <NavLink
        to="/dashboard/booking"
        className={({ isActive }) =>
          `${
            isActive && "text-white font-bold"
          } capitalize font-medium flex items-center gap-3`
        }
      >
        <FaCalendarAlt size={24} /> My booking
      </NavLink>
    </>
  );

  return (
    <section className="flex min-h-screen max-h-[1300px]">
      <div className="bg-[#D1A054] px-9 py-12 w-[19%]">
        <div className="uppercase font-Cinzel font-bold mb-16">
          <h3 className="text-2xl">Bistro boss</h3>
          <p className="text-lg">Restaurant</p>
        </div>
        <div className="flex flex-col gap-6">
          {userNavOptiosn}
          <div className="w-full h-[1px] bg-white"></div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive && "text-white font-bold"
              } capitalize font-medium flex items-center gap-3`
            }
          >
            <FaHome size={24} /> Home
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `${
                isActive && "text-white font-bold"
              } capitalize font-medium flex items-center gap-3`
            }
          >
            <FaBars size={24} /> Menu
          </NavLink>
          <NavLink
            to="/order/salad"
            className={({ isActive }) =>
              `${
                isActive && "text-white font-bold"
              } capitalize font-medium flex items-center gap-3`
            }
          >
            <HiShoppingBag size={24} /> Shop
          </NavLink>
          <NavLink
            to="/dashboard/"
            className={({ isActive }) =>
              `${
                isActive && "text-white font-bold"
              } capitalize font-medium flex items-center gap-3`
            }
          >
            <BsFillEnvelopeFill size={24} /> Contact
          </NavLink>
        </div>
      </div>
      {/* --- Page Content Goes Here --- */}
      <div className="w-full">
        <Outlet />
      </div>
    </section>
  );
};

export default Dashboard;
