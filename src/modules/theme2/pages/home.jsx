import React from "react";
import MainLayout from "../../../common/layout/mainLayout";
import DecorationLeft from "../../../common/components/decorationLeft";
import Group from "../../../common/components/group";
import Astronaut from "../../../assets/image_theme2.png";
import lineSvg from "../../../assets/line.svg";

const Home = () => {
  return (
    <MainLayout style="theme2">
      <div className="canvas theme2">
        <DecorationLeft style="theme2" />

        <div className="content">
          <h1 contentEditable className="theme2_title">
            Astronaut
          </h1>
          <div className="theme2_decoration_top">
            <img src={lineSvg} />
            <img src={lineSvg} />
          </div>
          <Group image="image" style="theme2_alone" />
          <div className="theme2_col_content">
            <Group content="content" />
            <Group content="content" />
          </div>
          <Group style="reverse" />
          <div className="theme2_col_content">
            <Group content="content" />
          </div>
        </div>
        <img src={Astronaut} className="theme2_img" />
      </div>
    </MainLayout>
  );
};

export default Home;
