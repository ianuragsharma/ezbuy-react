import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./profileScreen.css";
const PorfileScreen = () => {
  return (
    <div>
      <h4 className="mt-7 fw-500 text-center">Profile</h4>
      <div className="profile-screen">
        <div className="profile-header flex-row  ">
          <NavLink
            end
            to="/profile"
            className={({ isActive }) =>
              `${isActive ? "active-link" : ""} profile-item text-center py-2`
            }
          >
            Profile Info
          </NavLink>
          <NavLink
            end
            to="orders"
            className={({ isActive }) =>
              `${isActive ? "active-link" : ""} profile-item text-center  p-2`
            }
          >
            Orders
          </NavLink>
          <NavLink
            end
            to="addresses"
            className={({ isActive }) =>
              `${isActive ? "active-link" : ""} profile-item text-center  p-2`
            }
          >
            Addresses
          </NavLink>
        </div>
        <section className="p-2">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export { PorfileScreen };
