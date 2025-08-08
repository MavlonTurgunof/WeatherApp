import React from "react";
import { HiOutlineHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import Container from "./Container";
import { AiOutlineCompass } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import SearchInput from "../../features/SearchCity/SearchInput";

function Navbar() {
  return (
    <nav className=" border-b-2 border-[#ebebeb]">
      <Container>
        <div className="flex py-2 justify-between">
          <div className="flex items-center gap-1 mr-[50px] w-[300px]">
            <img src="/Logo.png" alt="Logo" className="w-12 h-12 " />
            <h1 className="text-[24px] text-primary font-bold">Windy</h1>
          </div>
          <div className="flex gap-6 py-2 w-[400px]">
            <NavLink
              className={({ isActive }) =>
                `text-[18px]  flex items-center  gap-1 transition-all duration-300 ${
                  isActive
                    ? " text-primary font-semibold"
                    : "text-secondary font-medium"
                }`
              }
              to={"/home"}
            >
              <HiOutlineHome size={26} /> Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-[18px]  flex items-center transition-all duration-300  gap-1 ${
                  isActive
                    ? " text-primary font-semibold"
                    : "text-secondary font-medium"
                }`
              }
              to={"/forecast"}
            >
              <AiOutlineCompass size={26} /> Forecast
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-[18px]  flex items-center transition-all duration-300  gap-1 ${
                  isActive
                    ? " text-primary font-semibold"
                    : "text-secondary font-medium"
                }`
              }
              to={"/settings"}
            >
              <IoSettingsOutline size={26} /> Settings
            </NavLink>
          </div>
          <SearchInput />
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
