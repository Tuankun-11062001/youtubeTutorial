import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";

const Theme3Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Theme3Router;
