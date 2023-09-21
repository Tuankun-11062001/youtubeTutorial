import React from "react";
import MainLayout from "../../../common/layout/mainLayout";
import birdSvg from "../../../assets/image_theme3.png";
import DecorationLeft from "../../../common/components/decorationLeft";
import imageTop from "../../../assets/image_theme3_top.png";
import Group from "../../../common/components/group";
const Home = () => {
  return (
    <MainLayout style="theme3">
      <div className="canvas theme3">
        <DecorationLeft style="theme3" />

        <div className="content">
          <h1 contentEditable className="theme3_title">
            What is love
          </h1>
          <img src={imageTop} className="theme3_image_top" />

          <Group label="theme3" />
          <Group label="theme3" image="image" style="theme3_alone" />
          <Group label="theme3" style="reverse" />
        </div>
        <img src={birdSvg} className="theme3_img" />
      </div>
    </MainLayout>
  );
};

export default Home;
