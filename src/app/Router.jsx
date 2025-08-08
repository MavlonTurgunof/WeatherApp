import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "../pages/AppLayout";
import Home from "../pages/Home";
import Forecast from "../pages/Forecast";
import Settings from "../pages/Settings";
import { Providers } from "./Providers";

function Router() {
  return (
    <Providers>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/forecast" element={<Forecast />} />
            <Route path="/settings" element={<Settings />} />
            <Route />
          </Route>
        </Routes>
      </BrowserRouter>
    </Providers>
  );
}

export default Router;
