import React from "react";
import Navigation from "../components/navigation";

const MainLayout = ({ children, style }) => {
  return (
    <div className={`layout ${style}`}>
      {/* content */}

      {children}

      {/* navigation */}
      <Navigation />
    </div>
  );
};

export default MainLayout;
