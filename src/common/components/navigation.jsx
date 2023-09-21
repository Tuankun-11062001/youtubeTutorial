import React, { useEffect, useLayoutEffect, useState } from "react";
import Buttons from "./buttons";
import { NavLink } from "react-router-dom";
import html2canvas from "html2canvas";

const Navigation = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const handleDownload = async () => {
    const navigation = document.querySelector(".navigation");
    navigation.style.display = "none";
    const screenTarget = document.querySelector(".layout");
    await html2canvas(screenTarget).then((canvas) => {
      const base64Image = canvas.toDataURL("image/png");
      var aEl = document.createElement("a");
      aEl.setAttribute("href", base64Image);
      aEl.setAttribute("download", "my-image.png");
      aEl.click();
      aEl.remove();
    });
    await setTimeout(() => {
      navigation.style.display = "flex";
    }, 2000);
  };
  return (
    <div className="navigation">
      <Buttons title="Download" func={handleDownload} style="btn_download" />
      <Buttons title="Change theme" func={handleNav} style="btn_theme" />
      {nav && (
        <div className="theme_list">
          <NavLink to="/">Theme 1</NavLink>
          <NavLink to="/theme2">Theme 2</NavLink>
          <NavLink to="/theme3">Theme 3</NavLink>
        </div>
      )}
    </div>
  );
};

export default Navigation;
