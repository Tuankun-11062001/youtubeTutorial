import React, { useId } from "react";
import uploadSVG from "../../assets/upload.svg";
const Group = ({ style, image, rotate, content, label }) => {
  const handleChangeURLImage = (e) => {
    const parent = e.target.parentNode;
    const view = parent.querySelector("div");
    let imgURL = URL.createObjectURL(e.target.files[0]);
    view.style.background = `url(${imgURL})`;
    view.style.backgroundPosition = "center";
    view.style.backgroundSize = "contain";
    view.style.backgroundRepeat = "no-repeat";
    view.style.height = "20rem";
    view.style.border = "none";
    view.textContent = "";
  };

  return (
    <>
      {image === "image" ? (
        <ImageComponent
          uploadImage={handleChangeURLImage}
          style={style}
          rotate={rotate}
          label={label}
        />
      ) : content === "content" ? (
        <ContentComponent />
      ) : (
        <ContentAndImageComponent
          uploadImage={handleChangeURLImage}
          style={style}
          rotate={rotate}
          label={label}
        />
      )}
    </>
  );
};

const ContentAndImageComponent = ({ uploadImage, label, style, rotate }) => {
  const id = useId();
  return (
    <div className={`group ${style}`}>
      <div className="group_content">
        <h3 contentEditable>Your Heading</h3>
        <p contentEditable>Your content</p>
      </div>
      <label htmlFor={id} className={`group_image  ${rotate}`}>
        <input
          type="file"
          id={id}
          accept="image/*"
          onChange={uploadImage}
          hidden
        />
        <div className={`group_view ${label}`}>
          <div>
            <p>
              Drag <span>OR</span> Upload
            </p>
            <p>Your image</p>
          </div>
          <img src={uploadSVG} />
        </div>
      </label>
    </div>
  );
};

const ImageComponent = ({ uploadImage, style, rotate, label }) => {
  const id = useId();
  return (
    <label htmlFor={id} className={`group_image ${style} ${rotate} `}>
      <input
        type="file"
        id={id}
        accept="image/*"
        onChange={uploadImage}
        hidden
      />
      <div className={`group_view ${label}`}>
        <div>
          <p>
            Drag <span>OR</span> Upload
          </p>
          <p>Your image</p>
        </div>
        <img src={uploadSVG} />
      </div>
    </label>
  );
};

const ContentComponent = () => {
  return (
    <div className="group_content">
      <h3 contentEditable>Your Heading</h3>
      <p contentEditable>Your content</p>
    </div>
  );
};

export default Group;
