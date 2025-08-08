import React from "react";
import { Link, NavLink } from "react-router-dom";
import { XIcon } from "../../assets/icon";
import { Menu } from "../../assets/icon";
import SearchInput from "./SearchInput";

function MobileNavbar({ setMobileMenuOpen, mobileMenuOpen }) {
  return (
    <div className="md:hidden py-2 border-b border-[#EDEDED] bg-white dark:bg-darkMode">
      <div>
        <div className="flex justify-between items-center px-4 pb-3">
          <div className="flex items-center gap-1 mr-[50px] w-[300px]">
            <img src="/Logo.png" alt="Logo" className="w-12 h-12 " />
            <h1 className="text-[24px] text-primary font-bold">Windy</h1>
          </div>
          <button
            className="bg-primary p-2 rounded-xl"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu width={"30px"} hight={"25px"} />
          </button>
        </div>
        <SearchInput />
      </div>
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white dark:bg-darkMode z-100 shadow-lg transform transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } rounded-tl-3xl`}
      >
        <div className="flex justify-start p-4">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-600 hover:text-red-500 transition"
          >
            <XIcon className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col items-start px-8 py-4 space-y-4">
          {[
            { to: "/home", label: "Home" },
            { to: "/forecast", label: "Forecast" },
            { to: "/settings", label: "Settings" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `w-full text-left px-4 py-2 rounded-full text-sm font-medium transition duration-150 ${
                  isActive
                    ? "bg-primary text-white shadow"
                    : "bg-[#F3F9FB] text-black hover:bg-[#DFF1FA]"
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default MobileNavbar;
