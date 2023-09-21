import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Theme2Router from "../../modules/theme2/router/theme2Router";
import Theme3Router from "../../modules/theme3/router/theme3Router";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/theme2/*" element={<Theme2Router />} />
        <Route path="/theme3/*" element={<Theme3Router />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
