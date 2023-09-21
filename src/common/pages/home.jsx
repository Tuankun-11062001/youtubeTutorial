import React from "react";
import MainLayout from "../layout/mainLayout";
import DecorationLeft from "../components/decorationLeft";
import Group from "../components/group";
import flower from "../../assets/image_theme1.png";
const Home = () => {
  return (
    <MainLayout style="theme1">
      <div className="canvas">
        <DecorationLeft style="theme1" />
        <div className="content">
          <h1 contentEditable>How is today</h1>
          <Group rotate="rotate_right" />
          <Group style="reverse" rotate="rotate_left" />
          <Group image="image" style="theme1_alone" />
        </div>
        <img src={flower} className="theme_img" />
      </div>
    </MainLayout>
  );
};

export default Home;
