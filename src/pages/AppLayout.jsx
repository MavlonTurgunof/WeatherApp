import React from "react";
import Navbar from "../shared/ui/Navbar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
